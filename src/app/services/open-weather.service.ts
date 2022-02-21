import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  URL = environment.openWeatherApi;
  APIkey = environment.weatherKey;

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) {
    const params = new HttpParams({
      fromObject: {
        q: city,
        appid: this.APIkey,
      }
    });
    return this.http.get(this.URL, { params });
  }
}
