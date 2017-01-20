import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TipsDataService} from '../../providers/tips-data-service';

@Component({
  selector: 'page-our-success',
  templateUrl: 'our-success.html',
  providers: [TipsDataService]
})
export class OurSuccessPage {
    public successRates: any;
    
    constructor(public navCtrl: NavController, public tipsDataService: TipsDataService) {
        this.successRates = this.getSuccessRate();
    }

    getSuccessRate() {
        this.tipsDataService.successRates.subscribe(
              successRates => this.successRates = successRates,
              console.error,
              () => console.log("Completed")
              //() => console.log(this.tipsDataService.successRates)
        );
        /*return [
          {
            "type": "Home Win",
            "totalTips": 24,
            "successfulTips": 13,
            "percentage": 54.16
          },
          {
            "type": "Guest Win",
            "totalTips": 10,
            "successfulTips": 4,
            "percentage": 40
          },
          {
            "type": "Draw",
            "totalTips": 3,
            "successfulTips": 1,
            "percentage": 33.33
          },
          {
            "type": "Over 0.5 Goals",
            "totalTips": 0,
            "successfulTips": 0,
            "percentage": 0
          },
          {
            "type": "Over 1.5 Goals",
            "totalTips": 1,
            "successfulTips": 1,
            "percentage": 100
          },
          {
            "type": "Over 2.5 Goals",
            "totalTips": 6,
            "successfulTips": 3,
            "percentage": 50
          },
          {
            "type": "Under 0.5 Goals",
            "totalTips": 0,
            "successfulTips": 0,
            "percentage": 0
          },
          {
            "type": "Under 1.5 Goals",
            "totalTips": 1,
            "successfulTips": 0,
            "percentage": 0
          },
          {
            "type": "Under 2.5 Goals",
            "totalTips": 2,
            "successfulTips": 1,
            "percentage": 50
          }
        ]*/
    }

}
