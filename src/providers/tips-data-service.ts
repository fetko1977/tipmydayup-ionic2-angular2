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
    
    constructor(private http: Http) {
        this.todayTips = this.getTodayTips();
    }

    getTodayTips(){
        var url = 'http://fetkolightadmin.info/TipMyDayUp-Admin/public/tips/today';
        return this.http.get(url).map(response => response.json());
    }

}
