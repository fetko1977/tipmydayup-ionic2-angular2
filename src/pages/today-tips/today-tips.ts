import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TipsDataService} from '../../providers/tips-data-service';

@Component({
  selector: 'page-today-tips',
  templateUrl: 'today-tips.html',
  providers: [TipsDataService]
})

export class TodayTipsPage {
  public todayTips: any;
  constructor(public navCtrl: NavController, public tipsDataService: TipsDataService) {
      this.todayTips = this.getTodayTips();
  }

  getTodayTips(){
    return [
      {
      "id": 1,
      "competition": "English Premiere League",
      "homeTeam": "Liverpool",
      "homeTeamStats": {
          "lastFive": ["W", "W", "W", "W", "W"],
          "headToHeadLastFive": [5, 0, 0, "15-0", 15]
      },
      "guestTeam": "Manchester United",
      "guestTeamStats": {
          "lastFive" : ["W", "L", "D", "L", "W"],
          "headToHeadLastFive": [0, 0, 5, "0-15", 0]
      },
      "tipContent": "Home Win",
      "coefficient": "2.5",
      "gameStart": "2016-02-26 00:00:00",
      "tipStatus": "schedualed",
      "tipOutcome": "awaiting",
      "homeTeamGoals": "0",
      "guestTeamGoals": "0"
    }
    ];
  };

  showStats(){
      
  }

}
