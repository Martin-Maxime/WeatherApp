import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  APIKEY ='d38295f9234a1e307e70f4f61ad38d33';
  private currentWeather;
  private forecastApiUrl;

  constructor(private http: Http) {
    this.currentWeather='http://api.openweathermap.org/data/2.5/weather?'
  	this.forecastApiUrl='http://api.openweathermap.org/data/2.5/forecast?';
  }

  getCurrentWeather(cityId) {
    return this.http.get(this.currentWeather+'id='+cityId+'&APPID='+this.APIKEY+'&&units=metric').map((res) =>{
      return res.json();
    })
  }


  getForecastWeather(cityId) {
  	return this.http.get(this.forecastApiUrl+'id='+cityId+'&APPID='+this.APIKEY+'&units=metric&cnt=3').map((res) =>{
  		return res.json();
  	})
  }

  getJSON(): Observable<any> {
    return this.http.get('assets/data/cities-fr.json').map((res) => {
    	return res.json();
    })
  }

}
