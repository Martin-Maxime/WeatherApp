import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  const APIKEY ='d38295f9234a1e307e70f4f61ad38d33';
  private url;

  constructor(private http: Http) {
  	this.url='http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}';
  }

  getWeather() {
  	return this.http.get(this.url).map((res) =>{
  		res.json();
  		console.log(res);
  	})
  }

}