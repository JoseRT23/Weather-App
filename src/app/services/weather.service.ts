import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = 'HERE_API_KEY';
  URI: string = '';

  constructor(private client: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;

  }

  getWeather(cityName: string, codeCountry: string) {
    return this.client.get(`${this.URI}${cityName},${codeCountry}`);
  }
}
