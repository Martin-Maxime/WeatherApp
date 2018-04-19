import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  cities: any;
  cityName: string;
  currentWeather: Object = {};
  currentWeatherId: number;
  currentWeatherTemp: number;
  forecastWeather: Object = {};

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  	this.getCities();
  	console.log(this.currentWeather+' ngoninit');
  }

/*	getWeather(): void {
	    this.weatherService.getWeather().subscribe(
	        (data: any) => {
	            this.weather = data;
	            console.log(this.weather);
	        },
	        (err: any) => {
	        }
	    );
	}*/

	getCities(): void {
		this.weatherService.getJSON().subscribe(
			(data:any) => {
				this.cities = data;
			},
			(err: any) => {

			}
		);
	}

	cityChange(cityId: number) {
		this.currentWeather = {};
		console.log(this.currentWeather)
		this.weatherService.getCurrentWeather(cityId).subscribe(
			(data:any) => {
				this.currentWeather = data;
				this.currentWeatherId = data.weather[0].id;
				this.currentWeatherTemp = data.main.temp;
				console.log(this.currentWeather);
			},
			(err: any) => {

			}
		)
		this.weatherService.getForecastWeather(cityId).subscribe(
			(data:any) => {
				this.weather = data;
				this.cityName = this.weather.city.name;
				this.forecastWeather = this.weather.list;
			},
			(err: any) => {

			}
		)
	}


}
