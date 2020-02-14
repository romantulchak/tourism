import { Component, OnInit } from '@angular/core';
import {TouristService} from '../shared/tourist.service';
import {Tourist} from '../model/Tourist';
import {ActivatedRoute, Router} from '@angular/router';
import {Flight} from '../model/Flight';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-tourist',
  templateUrl: './edit-tourist.component.html',
  styleUrls: ['./edit-tourist.component.css']
})
export class EditTouristComponent implements OnInit {


  private BASE_URL = 'http://localhost:8080/api/tourists';
  private  ALL_TOURISTS_URL = `${this.BASE_URL}\\all\\`;
  private  CREATE_TOURIST_URL = `${this.BASE_URL}`;
  private DELETE_TOURIST_URL = `${this.BASE_URL}\\delete\\`;
  private GET_TOURIST_BY_ID_URL = `${this.BASE_URL}\\edit\\`;
  addFLight = false;
  id: number;
  tourist: Tourist;
  constructor(private touristService: TouristService, router: Router, activeRoute: ActivatedRoute, private http: HttpClient) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.http.get<Tourist>(this.GET_TOURIST_BY_ID_URL + this.id).subscribe(
      res => {
        this.tourist = res;
        console.log(res);
      }
    );

    console.log(this.tourist);
  }

  public edit( id: number) {
    this.touristService.getTouristById(id).subscribe(
      res => {
        this.tourist = res;
        console.log(res);
      },
      error => {
        console.log("An error");
      }
    );
    console.log("TOURIST: " + this.tourist);
  }

  public addFlight() {
    this.addFLight = !this.addFLight;
  }

}
