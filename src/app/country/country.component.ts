import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  clicked = false;

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

  getColor(): string {
    return 'red';
  }
}
