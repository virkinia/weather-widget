import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { createCustomElement } from '@angular/elements';

import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { CityInputComponent } from './components/city-input/city-input.component';

@NgModule({
  entryComponents: [AppComponent, WeatherCardComponent,
    CityInputComponent,
    NotificationComponent],
  declarations: [
    AppComponent,
    WeatherCardComponent,
    CityInputComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: []

})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
        const el = createCustomElement(
          AppComponent, {
            injector: this.injector
        });
        customElements.define('weather-widget', el);
}
 }
