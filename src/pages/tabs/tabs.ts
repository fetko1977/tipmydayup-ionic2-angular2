import { Component } from '@angular/core';

import { TodayTipsPage } from '../today-tips/today-tips';
import { LastTipsPage } from '../last-tips/last-tips';
import { StatsPage } from '../stats/stats';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TodayTipsPage;
  tab2Root: any = LastTipsPage;
  tab3Root: any = StatsPage;

  constructor() {

  }
}
