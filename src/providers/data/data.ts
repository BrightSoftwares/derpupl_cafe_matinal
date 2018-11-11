import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {

  private bloggerPostsUrl = "https://www.googleapis.com/blogger/v3/blogs/1092067423469472535/posts?key=AIzaSyBO6PbP0hPWKzXa8OfBeRzVk-qOpzYUnI8";

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  getData(){
  	let posts = [];
  	return posts;
  }

  save(){

  }

}
