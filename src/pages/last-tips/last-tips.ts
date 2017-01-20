import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TipsDataService} from '../../providers/tips-data-service';

@Component({
  selector: 'page-last-tips',
  templateUrl: 'last-tips.html',
  providers: [TipsDataService]
})
export class LastTipsPage {
  public lastTips: any;

  constructor(public navCtrl: NavController, public tipsDataService: TipsDataService) {
      this.getLastTips();
  }

  getLastTips(): void {
      this.tipsDataService.lastTips.subscribe(
            lastTips => this.lastTips = lastTips,
            console.error,
            () => console.log("Completed")
      );
  }
}
