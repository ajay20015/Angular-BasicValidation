import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Country, State } from './studentType';
@Injectable({
  providedIn: 'root',
})
export class StudentPlacesService {
  private State_url = '../assets/States.json';
  private Country_url = '../assets/Countries.json';
  constructor(public http: HttpClient) {}

  getState() {
    return this.http.get<State[]>(this.State_url);
  }

  getCountry() {
    return this.http.get<Country[]>(this.Country_url);
  }
}
