import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LastTipsPage } from '../pages/last-tips/last-tips';
import { StatsPage } from '../pages/stats/stats';
import { TodayTipsPage } from '../pages/today-tips/today-tips';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    LastTipsPage,
    StatsPage,
    TodayTipsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LastTipsPage,
    StatsPage,
    TodayTipsPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
