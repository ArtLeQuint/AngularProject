import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';
import { ComapiService } from '../comapi.service';
import { Router } from '@angular/router';
import { group } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() type: string;
  countryList: Country[];
  countryName = '';
  capital = '';
  region = '';
  constructor(private comapi: ComapiService, private router: Router) { }

  ngOnInit() {
    this.comapi.getCountryList().subscribe(d => {
      this.countryList = d;
    });
  }

  check(country: Country) {
    let itsOk = false;
    switch (this.type) {
      case 'search':
        return true;
        break;
      case 'euCountries':
        return country.region === 'Europe';
        break;
      case 'naCountries':
        return country.subregion === 'Northern America';
        break;
      case 'eurCountries':
        for (const currency of country.currencies) {
          if (currency.code === 'EUR') {
            itsOk = true;
          }
        }
        return itsOk;
        break;
      case 'usDolCountries':
        for (const currency of country.currencies) {
          if (currency.code === 'USD') {
            itsOk = true;
          }
        }
        return itsOk;
        break;
      case 'canDolCountries':
        for (const currency of country.currencies) {
          if (currency.code === 'CAD') {
            itsOk = true;
          }
        }
        return itsOk;
        break;
      default:
        break;
    }
  }
}
