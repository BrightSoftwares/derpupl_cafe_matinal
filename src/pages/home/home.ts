import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { PostDetailPage } from '../post-detail/post-detail';
import { DataProvider } from '../../providers/data/data';
import { CacheService } from 'ionic-cache-observable'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public posts : Observable<any>;

  constructor(public navCtrl: NavController, 
  				public httpClient: HttpClient, 
  				public dataService: DataProvider,
          private cacheService: CacheService) {
  	
  	this.dataService.pullBloggerPosts().then((posts) => {
  		this.posts = posts;
  	});
  	
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.dataService.pullBloggerPosts().then((posts) => {
      console.log('Async operation has ended');
      this.posts = posts;
      refresher.complete();
    });
  }

  ionViewDidLoad(){


  }

  /*
  ionViewWillEnter() {
    // The observable you normally get items from server with.
    let postsListObservable: Observable<Any> = this.dataService.pullBloggerPosts();

    this.cacheService
        .register('postsList', postsListObservable)
        .mergeMap((cache: Cache<Any>) => cache.get())
        .subscribe((postsList) => {
          // The shopping list is retrieved from local storage,
          // or in the case that it doesn't exist in storage yet;
          // by triggering your postsListObservable.
          this.posts = postsList;
        });

  }
  */

  refreshShoppingList() {
      this.cacheService
          .get('postsList')
          .mergeMap((cache: Cache<Any>) => cache.refresh())
          .subscribe((postsList) => {
            // The shopping list was just "refreshed" by calling the
            // shoppingListProvider observable that was registered with the cache.
            this.posts = postsList;
          });
  }

  viewPost(post){
    this.navCtrl.push(PostDetailPage, { thePost: post });
  }
  

}
