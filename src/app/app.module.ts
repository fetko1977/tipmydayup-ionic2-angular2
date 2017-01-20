import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LastTipsPage } from '../pages/last-tips/last-tips';
import { OurSuccessPage } from '../pages/our-success/our-success';
import { TodayTipsPage } from '../pages/today-tips/today-tips';
import { TabsPage } from '../pages/tabs/tabs';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'faa7b799'
  },
  'push': {
    'sender_id': '579051870691',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'icon': "ionic_push_logo",
        'iconColor': '#007f03'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    LastTipsPage,
    OurSuccessPage,
    TodayTipsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
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
