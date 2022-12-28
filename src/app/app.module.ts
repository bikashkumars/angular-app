import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [FilmService, PeopleService, PlanetService, SpecieService, StarshipService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
