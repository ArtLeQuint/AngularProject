import { Component, OnInit } from '@angular/core';
import { Country } from '../model/country';
import { ComapiService } from '../comapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  countryList: Country[];
  countryName = 'Afghanistan';
  constructor(private comapi: ComapiService, private router: Router) { }

  ngOnInit() { }

  onClick() {
    this.comapi.getCountryList().subscribe( d => {
      this.countryList = d;
      console.log(this.countryList);
    });
  }

}
