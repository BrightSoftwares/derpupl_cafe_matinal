import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {

  public post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.post = this.navParams.get("thePost");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailPage');
    //this.post = this.navParams.get("thePost");
    console.log(this.post);
    //let title = this.navParams.get("thePost").title;
    //console.log(title);
  }

}
