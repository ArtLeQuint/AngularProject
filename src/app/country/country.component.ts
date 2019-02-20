import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../model/country';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

export interface Tile {
  label: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country;
  tiles: Tile[];
  selected = '';

  constructor() { }

  ngOnInit() {
    const altSpellings = this.country.altSpellings.toString().replace(',', ', ');
    const area = this.country.area == null ? '' : this.country.area.toString();
    const latlng = this.country.latlng == null ? '' : this.country.latlng.toString();
    this.tiles = [
      { label: 'Region', text: this.country.region.toString() + ', ' + this.country.subregion, cols: 2, rows: 1 },
      { label: 'Capital', text: this.country.capital, cols: 2, rows: 1 },
      { label: 'Population', text: this.country.population.toString(), cols: 2, rows: 1 },
      { label: 'Latitude, Longitude',
        text: latlng.toString() + ', ' + latlng.toString(), cols: 2, rows: 1 },
      { label: 'Area', text: area.toString(), cols: 1, rows: 1 },
      { label: 'Alpha 2 Code', text: this.country.alpha2Code.toString(), cols: 1, rows: 1 },
      { label: 'Alpha 3 Code', text: this.country.alpha3Code.toString(), cols: 1, rows: 1 },
      { label: 'Currency', text: this.country.currencies[0].name
                                   + ' (' + this.country.currencies[0].symbol + ')', cols: 1, rows: 1 },
      { label: 'Alternative Spellings', text: altSpellings, cols: 4, rows: 1 },

    ];
  }
}
