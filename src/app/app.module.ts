import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HttpClientModule } from '@angular/common/http';

import { FilmService } from './services/film.service';
import { PeopleService } from './services/people.service';
import { PlanetService } from './services/planet.service';
import { SpecieService } from './services/specie.service';
import { StarshipService } from './services/starship.service';
import { VehicleService } from './services/vehicle.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FilmService, PeopleService, PlanetService, SpecieService, StarshipService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
