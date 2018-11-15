import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantsProvider {

  private url = "https://www.googleapis.com/blogger/v3/blogs/1092067423469472535/posts";
  private apiKey = "AIzaSyBO6PbP0hPWKzXa8OfBeRzVk-qOpzYUnI8";

  constructor(public http: HttpClient) {
    console.log('Hello ConstantsProvider Provider');
  }

  getUrl(){
  	return '' + this.url;
  }

  getApiKey(){
  	return '' + this.apiKey;
  }

  getBlogApiUrl(){
  	return '' + this.url + '?key=' + this.apiKey;
  }

}
