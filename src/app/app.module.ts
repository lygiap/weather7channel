import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CityPage } from '../pages/city/city';
import { SearchPage } from '../pages/search/search';
import { WeatherService } from '../services/weather';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CityPage,
    SearchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CityPage,
    SearchPage
  ],
  providers: [WeatherService]
  //providers:[{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
