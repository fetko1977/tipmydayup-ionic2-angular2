import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {TipsDataService} from '../../providers/tips-data-service';

@Component({
  selector: 'page-last-tips',
  templateUrl: 'last-tips.html'
})
export class LastTipsPage {
  public lastTips: any;

  constructor(public navCtrl: NavController) {
      this.lastTips = this.getLastTips();
  }

  getLastTips() {
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
              "date": "2016-02-24",
              "hours": "17:00:00"
          },
          "tipStatus": "finished",
          "tipOutcome": "success",
          "homeTeamGoals": "7",
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
              "date": "2016-02-25",
              "hours": "17:00:00"
          },
          "tipStatus": "finished",
          "tipOutcome": "fail",
          "homeTeamGoals": "0",
          "guestTeamGoals": "1"
        }
    ];
  }
}
