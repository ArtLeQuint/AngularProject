import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';
import { ComapiService } from '../comapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countryList: Country[];
  countryName = '';
  constructor(private comapi: ComapiService, private router: Router) { }

  ngOnInit() {
    this.comapi.getCountryList().subscribe(d => {
      this.countryList = d;
    });
  }

  setSearch() {
    this.comapi.getCountryList().subscribe(d => {
      this.countryList = d;
    });
  }
}
