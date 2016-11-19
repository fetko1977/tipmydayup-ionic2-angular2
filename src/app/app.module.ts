import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LastTipsPage } from '../pages/last-tips/last-tips';
import { OurSuccessPage } from '../pages/our-success/our-success';
import { TodayTipsPage } from '../pages/today-tips/today-tips';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    LastTipsPage,
    OurSuccessPage,
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
    OurSuccessPage,
    TodayTipsPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
