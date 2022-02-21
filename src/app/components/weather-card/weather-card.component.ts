import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  temp: string = '15';
  city: string = 'Heidenheim'


  constructor(private weatherService: OpenWeatherService) { }

  ngOnInit(): void {
    this.weatherService.getCurrentWeather(this.city).subscribe(weather => console.log(weather) )
  }

}
