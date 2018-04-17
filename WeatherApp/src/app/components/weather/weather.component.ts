import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  	this.getWeather();
  }

	getWeather(): void {
	    this.weatherService.getWeather().subscribe(
	        (data: any) => {
	            this.weather = data;
	            console.log(this.weather);
	        },
	        (err: any) => {
	        }
	    );
	}

}
