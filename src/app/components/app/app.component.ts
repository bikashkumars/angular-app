import { Component, NgZone } from '@angular/core';

import { FilmService } from '../../services/film.service';
import { PeopleService } from '../../services/people.service';
import { PlanetService } from '../../services/planet.service';
import { SpecieService } from '../../services/specie.service';
import { StarshipService } from '../../services/starship.service';
import { VehicleService } from '../../services/vehicle.service';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  responseArr: any = [];
  search: string;
  category: string;
  loading = false;
  response = false;
  count = 0;
  loadNextLink = "";

  searchFrom = new FormGroup({
    search: new FormControl(),
    category: new FormControl()
  });

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public filmService: FilmService,
    public peopleService: PeopleService,
    public planetService: PlanetService,
    public specieService: SpecieService,
    public starshipService: StarshipService,
    public vehicleService: VehicleService,
    public http: HttpClient
  ) {}

  resetForm() {
    this.searchFrom.reset();
    this.responseArr = [];
    this.loading = false;
    this.response = false;
    this.loadNextLink = "";
    this.count = 0;
  }

  resetDisplayData() {
    this.responseArr = [];
    this.loading = false;
    this.response = false;
    this.loadNextLink = "";
    this.count = 0;
  }

  newSearch(){
    this.count = 0;
    this.responseArr = [];
    this.searchData();
  }

  searchData() {
    this.search = this.searchFrom.get('search')?.value;
    this.category = this.searchFrom.get('category')?.value;

    this.loading = true;
    this.response = false;

    if(this.category == "film") {
      this.filmService.search(this.search, this.loadNextLink).subscribe((data: {}) => {
        this.count = data["count"];
        this.handleReceivedData(data);
      });
    } else if(this.category == "people"){
      this.peopleService.search(this.search, this.loadNextLink).subscribe((data: {}) => {
        this.count = data["count"];
        this.handleReceivedData(data);
      });
    } else if(this.category == "starship"){
      this.starshipService.search(this.search, this.loadNextLink).subscribe((data: {}) => {
        this.count = data["count"];
        this.handleReceivedData(data);
      });
    } else if(this.category == "vehicle"){
      this.vehicleService.search(this.search, this.loadNextLink).subscribe((data: {}) => {
        this.count = data["count"];
        this.handleReceivedData(data);
      });
    } else if(this.category == "specie"){
      this.specieService.search(this.search, this.loadNextLink).subscribe((data: {}) => {
        this.count = data["count"];
        this.handleReceivedData(data);
      });
    } else if(this.category == "planet"){
      this.planetService.search(this.search, this.loadNextLink).subscribe((data: {}) => {
        this.count = data["count"];
        this.handleReceivedData(data);
      });
    } else {
      this.loading = false;
      this.response = true;
    }
  }

  handleReceivedData(data) {
    data["results"].forEach(records => this.responseArr.push(records));
    this.loading = false;
    this.response = true;

    if(data["nextlink"] != null){
      this.loadNextLink = data["nextlink"];
    } else {
      this.loadNextLink = "";
    }
  }
}
