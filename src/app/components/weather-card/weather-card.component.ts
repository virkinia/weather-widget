import { Component, Input, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Weather } from 'src/app/models/weather.model';
import { NotificationService } from 'src/app/services/notification.service';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() set selectedCity(value: string) {
    this._selectedCity = value;
    this.setWeather();
  }

  private _selectedCity: string = 'Heidenheim'
  weather?: Weather;


  constructor(private weatherService: OpenWeatherService, private notificationService: NotificationService) { }

  ngOnInit(): void {}

  setWeather() {
    this.weatherService.getCurrentWeather(this._selectedCity).pipe(
      catchError(() => {
        this.notificationService.notification = true;
        return of(new Weather())
    ;})).subscribe(weather => this.weather = weather);
  }

}
