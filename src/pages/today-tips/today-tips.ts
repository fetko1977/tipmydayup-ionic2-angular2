import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TipsDataService} from '../../providers/tips-data-service';

@Component({
  selector: 'page-today-tips',
  templateUrl: 'today-tips.html',
  providers: [TipsDataService]
})

export class TodayTipsPage {
  
  constructor(public navCtrl: NavController) {
    
  }

}
