import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

<<<<<<< HEAD
import { PostDetailPage } from '../post-detail/post-detail';
=======
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public posts : Observable<any>;

<<<<<<< HEAD
  constructor(public navCtrl: NavController, 
  				public httpClient: HttpClient, 
  				public dataService: DataProvider) {
  	
  	
  	this.dataService.pullBloggerPosts().then((posts) => {
  		this.posts = posts;
  	});
  	
  }

=======
  constructor(public navCtrl: NavController, public httpClient: HttpClient, public dataService: DataProvider) {
  	
  	
  	this.pullBloggerPosts();
  	
  }

  pullBloggerPosts(){

    let url = "https://www.googleapis.com/blogger/v3/blogs/1092067423469472535/posts?key=AIzaSyBO6PbP0hPWKzXa8OfBeRzVk-qOpzYUnI8"

    this.posts = this.httpClient.get(url);

  }
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

<<<<<<< HEAD
    this.dataService.pullBloggerPosts().then((posts) => {
      console.log('Async operation has ended');
      this.posts = posts;
      refresher.complete();
    });
=======
    this.pullBloggerPosts();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc
  }

  ionViewDidLoad(){

  	/**
  	this.posts = [
  		{
  			title: "Love God", 
  			content: "With all my heart and all my strength.",
  			picture: "https://picsum.photos/200/300/?random",
  			authorAvatar: "assets/imgs/marty_mcfly.jpg",
  			publishDate: "5 Novembre 2018",
  			timeElapsed: "3h",
  			category: "annonce",
  			tags: ["fête", "libération"],
  			nbLikes: 4,
  			nbComments: 8
  		},
  		{
  			title: "Love my wife", 
  			content: "Like Jeus loved the church.",
  			picture: "https://picsum.photos/200/300/?random",
  			authorAvatar: "assets/imgs/marty_mcfly.jpg",
  			publishDate: "7 Novembre 2018",
  			timeElapsed: "3d",
  			category: "enseignement",
  			tags: ["fidélité", "sagesse"],
  			nbLikes: 45,
  			nbComments: 87
  		},
  		{
  			title: "Love my children", 
  			content: "Like I love myself.",
  			picture: "https://picsum.photos/200/300/?random",
  			authorAvatar: "assets/imgs/marty_mcfly.jpg",
  			publishDate: "15 Novembre 2018",
  			timeElapsed: "33h",
  			category: "annonce",
  			tags: ["foi", "fidélité"],
  			nbLikes: 34,
  			nbComments: 18
  		}

  	];
  	

  	this.dataService.getData().then((data) => {
  		this.posts = data.items;
  	});
  	**/

  }
<<<<<<< HEAD
=======

  viewPost(post){
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc

  viewPost(post){
    this.navCtrl.push(PostDetailPage, { thePost: post });
  }
  

}
