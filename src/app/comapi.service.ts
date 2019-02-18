import { Injectable } from '@angular/core';
import { Country } from './model/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComapiService {

  urlCountryList = 'https://restcountries.eu/rest/v2/all';

  constructor(private httpClient: HttpClient) { }
  public getCountryList(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.urlCountryList);
  }
}
