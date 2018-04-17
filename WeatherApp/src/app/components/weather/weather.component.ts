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
  data: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  	/*this.getWeather();*/
  	this.getCities();
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

	cityChange(cityId: number) {
		console.log(cityId);
		this.weatherService.getWeather(cityId).subscribe(
			(data:any) => {
				this.weather = data;
			},
			(err: any) => {

			}
		)
	}

	getCities(): void {
		this.weatherService.getJSON().subscribe(
			res => this.data = res.json()
		);
	}

}
