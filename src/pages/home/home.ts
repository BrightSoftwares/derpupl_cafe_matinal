import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public posts : Observable<any>;

  constructor(public navCtrl: NavController, 
  				public httpClient: HttpClient, 
  				public dataService: DataProvider) {
  	
  	
  	this.posts = this.dataService.pullBloggerPosts();
  	
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.posts = this.dataService.pullBloggerPosts().then(() => {
      console.log('Async operation has ended');
      refresher.complete();
    });
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

  viewPost(post){

  }
  

}
