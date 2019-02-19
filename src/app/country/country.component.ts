import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  countryDetails = false;

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.countryDetails = !this.countryDetails;
    console.log(this.countryDetails);
  }

  getColor(): string {
    return 'red';
  }
}
