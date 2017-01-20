import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TipsDataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TipsDataService {
    public todayTips: any;
    public lastTips: any;
    public successRates: any;
    
    constructor(private http: Http) {
        this.todayTips = this.getTodayTips();
        this.lastTips = this.getLastTips();
        this.successRates = this.getSuccessRates();
    }

    getTodayTips(){
        var url = 'http://fetkolightadmin.info/TipMyDayUp-Admin/public/tips/today';
        return this.http.get(url).map(response => response.json());
    }

    getLastTips(){
        var url = 'http://fetkolightadmin.info/TipMyDayUp-Admin/public/tips/yesterday';
        return this.http.get(url).map(response => response.json());
    }

    getSuccessRates() {
        var url = 'http://fetkolightadmin.info/TipMyDayUp-Admin/public/tips/success-rates';
        return this.http.get(url).map(response => response.json());
    }

}
