import {Component, OnInit} from '@angular/core';
import {TouristService} from '../../shared/tourist.service';
import {ITourist} from '../../model/ITourist';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css'],
  providers: [DatePipe]
})
export class CreateTouristComponent implements OnInit {
  public loading = false;
  countries: string[];

  model: ITourist = {
    id: null,
    firstName: '',
    lastName: '',
    sex: 'Male',
    country: 'Poland',
    notes: '',
    flights: null,
    birthday: ''
  };
  constructor(private touristService: TouristService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getCountries();
  }
  createTourist() {
    this.model.birthday = this.datePipe.transform(this.model.birthday, 'yyyy-MM-dd');
   this.touristService.createTourist(this.model).subscribe(
      res => {location.reload(); },
      error => {console.log('An error'); }
    );
  }




  getCountries() {
    this.loading = true;
    this.touristService.getCountries().subscribe(
      res => {

        this.countries = res;
        if (this.countries != null){
          setTimeout(()=>{
            this.loading = false;
          },1000);
        }

        },
      error => {console.log('An error'); }
    );
  }
}

/*
export interface ITourist {
  firstName: string;
  lastName: string;
  sex: string;
  country: string;
  notes: string;
}

 */

