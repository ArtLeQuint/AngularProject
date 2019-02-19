import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';
import { ComapiService } from '../comapi.service';
import { Router } from '@angular/router';

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
      default:
        break;
    }
  }
}
