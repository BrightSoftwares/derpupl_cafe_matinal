import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConstantsProvider } from '../constants/constants';


@Injectable()
export class DataProvider {

  constructor(public http: HttpClient,
  				public constantsProvider: ConstantsProvider) {
    console.log('Hello! DataProvider Provider constructed.');
  }

  getData(){
  	
  }

  save(){

  }


  pullBloggerPosts(){

    let url = this.constantsProvider.getBlogApiUrl();

    try {
	  return this.http.get(url);
	}
	catch(e) {
	  console.log(e);

	}
  }

}
