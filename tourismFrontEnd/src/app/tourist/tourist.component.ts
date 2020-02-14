import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tourist} from '../model/Tourist';
import {TouristService} from '../shared/tourist.service';

@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {

  tourists: Tourist[] = [];
  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getAllTourists();
  }


  public getAllTourists() {
      this.touristService.getAllTourists().subscribe(
        res => {

          this.tourists = res;

          },
        error => {console.log('An error'); }
      );
  }
  public deleteTourist(id: number) {
    this.touristService.deleteTourist(id).subscribe(
      res => {location.reload(); },
      error => {console.log('An error'); }
    );
  }

}
