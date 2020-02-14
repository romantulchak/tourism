import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TouristService} from '../shared/tourist.service';
import {Tourist} from '../model/Tourist';

@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {

  countries: string[];

  model: Tourist = {
    id: null,
    firstName: '',
    lastName: '',
    sex: 'Mężczyzna',
    country: 'Poland',
    notes: '',
    flights: null
  };
  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getCountries();
  }
  createTourist() {
    this.touristService.createTourist(this.model).subscribe(
      res => {location.reload(); },
      error => {console.log('An error'); }
    );
  }

  getCountries() {
    this.touristService.getCountries().subscribe(
      res => {

        this.countries = res;

        },
      error => {console.log('An error'); }
    );
  }
}

/*
export interface Tourist {
  firstName: string;
  lastName: string;
  sex: string;
  country: string;
  notes: string;
}

 */

