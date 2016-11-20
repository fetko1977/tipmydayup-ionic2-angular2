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
              "headToHeadLastFive": [5, 0, 0, "15:0"]
          },
          "guestTeam": "Manchester United",
          "guestTeamStats": {
              "lastFive" : ["W", "L", "D", "L", "W"],
              "headToHeadLastFive": [0, 0, 5, "0:15"]
          },
          "tipContent": "Home Win",
          "coefficient": "2.5",
          "gameStart": {
              "date": "2016-02-26",
              "hours": "17:00:00"
          },
          "tipStatus": "schedualed",
          "tipOutcome": "awaiting",
          "homeTeamGoals": "0",
          "guestTeamGoals": "0"
        },

        {
          "id": 2,
          "competition": "English Premiere League",
          "homeTeam": "Aresenal",
          "homeTeamStats": {
              "lastFive": ["W", "W", "W", "W", "W"],
              "headToHeadLastFive": [5, 0, 0, "15:0"]
          },
          "guestTeam": "Manchester City",
          "guestTeamStats": {
              "lastFive" : ["W", "L", "D", "L", "W"],
              "headToHeadLastFive": [0, 0, 5, "0:15"]
          },
          "tipContent": "Home Win",
          "coefficient": "2.5",
          "gameStart": {
              "date": "2016-02-26",
              "hours": "17:00:00"
          },
          "tipStatus": "schedualed",
          "tipOutcome": "awaiting",
          "homeTeamGoals": "0",
          "guestTeamGoals": "0"
        }
    ];
  };

  showStats(event){
      $('.tmdu-tip-team-item').not($(event.target).parents('.tmdu-tip-team-item')).find('.tmdu-stats-item').addClass('tmdu-hidden');
      $(event.target).parents('.tmdu-tip-team-item').find('.tmdu-stats-item').toggleClass('tmdu-hidden');
      
  }

}
