import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

<<<<<<< HEAD
import { ConstantsProvider } from '../constants/constants';

=======
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc

@Injectable()
export class DataProvider {

<<<<<<< HEAD
  constructor(public http: HttpClient,
  				public constantsProvider: ConstantsProvider) {
    console.log('Hello! DataProvider Provider constructed.');
  }

  getData(){
  	
=======
  private bloggerPostsUrl = "https://www.googleapis.com/blogger/v3/blogs/1092067423469472535/posts?key=AIzaSyBO6PbP0hPWKzXa8OfBeRzVk-qOpzYUnI8";

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getData(){
  	let posts = [];
  	return posts;
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc
  }

  save(){

  }

<<<<<<< HEAD

  async pullBloggerPosts(){

    let url = this.constantsProvider.getBlogApiUrl();

    try {
	  return this.http.get(url);
	}
	catch(e) {
	  console.log(e);

	}
  }

=======
>>>>>>> 0fbc2244d670a9516b8c31c2d0128a0b2460e2bc
}
