import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-today-tips',
  templateUrl: 'today-tips.html'
})
export class TodayTipsPage {
  public todayTips = '';
  constructor(public navCtrl: NavController) {
    this.getTodayTips();
  }

  private getTodayTips() {
    this.todayTips = 'Bla';
  }

}
