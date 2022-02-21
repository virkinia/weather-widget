import * as moment from "moment";
import { Moment } from "moment";

export interface WeatherResponse {

  coord: Coord;
  weather: Weather;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  sys: Sys;
  rootObject: RootObject;
}



export class Weather {

  _tempeture: number;
  _city: string;
  _day: string;

  constructor(arg: WeatherResponse) {

    this._tempeture = arg.main.temp;
    this._city = arg.rootObject.name;
    this._day = moment.unix(1560350645).format("MM/DD/YYYY");



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


