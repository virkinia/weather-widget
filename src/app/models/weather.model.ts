import * as moment from "moment";
import { Moment } from "moment";

export interface WeatherResponse {

  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;

}



export class Weather {

  _tempeture: number;
  _city: string;
  _day: string;
  _icon: string;

  constructor() {

    this._tempeture = 0;
    this._city = '-';
    this._day = '-';
    this._icon = ''

  }

  set weather(arg: WeatherResponse) {
    this._tempeture = arg.main.temp;
    this._city = arg.name;
    this._day = moment.unix(1560350645).format("MM/DD/YYYY");

    this._icon = `http://openweathermap.org/img/wn/${arg.weather[0].icon}@2x.png`
  }

  set tempeture (value: number) {
    this._tempeture = value;
  }

  get tempeture(): number {
    return this._tempeture;
  }

  set city (value: string) {
    this._city = value;
  }

  get city(): string {
    return this._city;
  }

  set day(value:string){
    this._day = value;
  }

  get day(): string {
    return this._day;
  }

  set icon(value:string){
    this._icon = value;
  }

  get icon(): string {
    return this._icon;
  }

}



  export interface Coord {
      lon: number;
      lat: number;
  }

  export interface Weather {
      id: number;
      main: string;
      description: string;
      icon: string;
  }

  export interface Main {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
  }

  export interface Wind {
      speed: number;
      deg: number;
  }

  export interface Clouds {
      all: number;
  }

  export interface Sys {
      type: number;
      id: number;
      message: number;
      country: string;
      sunrise: number;
      sunset: number;
  }

  export interface RootObject {
      coord: Coord;
      weather: Weather[];
      base: string;
      main: Main;
      visibility: number;
      wind: Wind;
      clouds: Clouds;
      dt: number;
      sys: Sys;
      timezone: number;
      id: number;
      name: string;
      cod: number;
  }


