import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule,
         MatInputModule, MatButtonModule, MatGridListModule, MatMenuModule,
         MatButtonToggleModule, MatExpansionModule,
       } from '@angular/material';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const appRoutes: Routes = [
  { path: 'recherche', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchComponent,
    NavComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
