import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'aea65ecfd9833784ee7bdc9b7ceab687';
  URI: string = '';

  constructor(private client: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;

  }

  getWeather(cityName: string, codeCountry: string) {
    return this.client.get(`${this.URI}${cityName},${codeCountry}`);
  }
}
