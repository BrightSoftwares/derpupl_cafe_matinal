import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Storage, SqlStorage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConstantsProvider } from '../constants/constants';

@Injectable()
export class DataProvider {

  //public storage;

  constructor(public http: HttpClient,
  				public constantsProvider: ConstantsProvider,
          public storage: Storage) {
    console.log('Hello! DataProvider Provider constructed.');
    //this.storage = new Storage(SqlStorage);
  }

  getAllPostsData(){
  	return this.storage.get("all_posts");
  }

  saveAllPostsData(posts){
    this.storage.set("all_posts", posts);
  }

  async pullBloggerPosts(){

    let url = this.constantsProvider.getBlogApiUrl();

    try {
	    let allPosts = this.http.get(url);
      //this.saveAllPostsData(allPosts);
      console.log(allPosts);
      return allPosts;
  	}
  	catch(e) {
  	  console.log(e);

  	}
  }

}
