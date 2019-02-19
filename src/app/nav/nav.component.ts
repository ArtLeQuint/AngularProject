import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  search = true;
  euCountries = false;
  naCountries = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  onClick(link: string) {
    switch (link) {
      case 'search':
        this.search = true;
        this.euCountries = false;
        this.naCountries = false;
        break;
      case 'euCountries':
        this.search = false;
        this.euCountries = true;
        this.naCountries = false;
        break;
      case 'naCountries':
        this.search = false;
        this.euCountries = false;
        this.naCountries = true;
        break;
      default:
        this.search = true;
        this.euCountries = false;
        this.naCountries = false;
        break;
    }
  }

}
