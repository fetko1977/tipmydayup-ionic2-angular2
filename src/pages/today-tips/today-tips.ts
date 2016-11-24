import { Component } from '@angular/core';
import * as $ from 'jquery'

import { NavController } from 'ionic-angular';

import {TipsDataService} from '../../providers/tips-data-service';

@Component({
  selector: 'page-today-tips',
  templateUrl: 'today-tips.html',
  providers: [TipsDataService]
})

export class TodayTipsPage {
  public todayTips: any;
  public todayTipsLength: any;
  
  constructor(public navCtrl: NavController, public tipsDataService: TipsDataService) {
      this.getTodayTips();
  }
  
  getTodayTips(): void {
    this.tipsDataService.todayTips.subscribe(
      todayTips => this.todayTips = todayTips,
      console.error,
      //() => console.log("Completed")
      () => console.log(this.todayTips.length)
    );
  }

  showStats(event){
      $('.tmdu-tip-team-item').not($(event.target).parents('.tmdu-tip-team-item')).find('.tmdu-stats-item').addClass('tmdu-hidden');
      $(event.target).parents('.tmdu-tip-team-item').find('.tmdu-stats-item').toggleClass('tmdu-hidden');
  }

}
