import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
/*
  Generated class for the PreferencesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PreferencesProvider {

	private _preferences;

  	constructor(public http: HttpClient, public dataService: DataProvider) {
       console.log('Hello PreferencesProvider Provider');
       this._preferences = {};
  	}

  	static get PREF_INITIALIZED() { return 'preferencesInitialized'; }
	static get PREF_DISCOVERABLE() { return 'pref_discoverable'; }
	static get PREF_NOTIFY_MESSAGES() { return 'pref_notification_messages'; }
	static get PREF_NOTIFY_INVITES() { return 'pref_notification_invites'; }

	static get parameters() {
	   return [[DataProvider]];
	}

	initializePreferences(){
	  console.log('initializePreferences');
	  this.dataService.storage.get(PreferencesProvider.PREF_INITIALIZED).then((result) => {
	    if(result == null || result == false){
	      console.log('initializePreferences with default values');
	      this.dataService.storage.set(PreferencesProvider.PREF_INITIALIZED, true);
	      this.dataService.storage.set(PreferencesProvider.PREF_DISCOVERABLE, true);
	      this.dataService.storage.set(PreferencesProvider.PREF_NOTIFY_MESSAGES, true);
	      this.dataService.storage.set(PreferencesProvider.PREF_NOTIFY_INVITES, true);

	      //initialize in memory preferences
	      this._preferences[PreferencesProvider.PREF_DISCOVERABLE] = true;
	      this._preferences[PreferencesProvider.PREF_NOTIFY_MESSAGES] = true;
	      this._preferences[PreferencesProvider.PREF_NOTIFY_INVITES] = true;
	    }else{
	      console.log('preferences obtained from storage');
	      let prefs =
	        [
	          PreferencesProvider.PREF_DISCOVERABLE,
	          PreferencesProvider.PREF_NOTIFY_MESSAGES,
	          PreferencesProvider.PREF_NOTIFY_INVITES
	        ];

	      let thisRef = this;
	      this._getAllPreferences(prefs).then(function(results){
	          //initialize in memory preferences
	          for(let i = 0; i < prefs.length; i++){
	            thisRef._preferences[prefs[i]] = results[i];
	          }
	        }, function (err) {
	          // If any of the preferences fail to read, err is the first error
	          console.log(err);
	        });
	    }
	  });
	}

	getPreference(key){
	  return this._preferences[key];
	}

	setPreference(key, value){
	  this._preferences[key] = value;//update pref in memory
	  this.dataService.storage.set(key, value);//update pref in db
	}

	_getAllPreferences(prefs){
	  return Promise.all(prefs.map((key) => {
	    return this.dataService.storage.get(key);
	  }));
	}

	_getPreference(key){
	  return this.dataService.storage.get(key);
	}

}
