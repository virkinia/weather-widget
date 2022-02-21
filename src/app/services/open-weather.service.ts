import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Weather, WeatherResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  URL = environment.openWeatherApi;
  APIkey = environment.weatherKey;

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<Weather> {
    const params = new HttpParams({
      fromObject: {
        q: city,
        appid: this.APIkey,
        units: "metric"
      },
    });

    return this.http.get<WeatherResponse>(this.URL, { params })
    .pipe(map(weatherResponse => new Weather(weatherResponse)) );
  }
}
