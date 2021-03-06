import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ModalController } from 'ionic-angular';

/*
  Generated class for the ModalService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ModalService {

  constructor(
    public http: Http,
    public modalCtrl: ModalController
  ) {
    console.log('Hello ModalService Provider');
  }

  getPrompt(data){
  	let prompt = this.modalCtrl.create({
      title: data.title,
      message: data.message,
      inputs: data.inputs,
      buttons: data.buttons
    });
    return prompt;
  }

}
