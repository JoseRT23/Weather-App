import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  weather: any;

  constructor(private weatherService: WeatherService) {

  }

  ngOnInit() {
  }
  
  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res =>  this.weather = res
    )    
  }

  submitLocation(cityName: any, countryCode: any) {
    if(cityName.value && countryCode.value){
        this.getWeather(cityName.value, countryCode.value)
    
        cityName.value = '';
        countryCode.value = '';

    }else {
      alert('Por favor ingresa una ciudad con su codigo.')
    }
    
    cityName.focus();
    return false;
  }
  
}
