import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tourist} from '../model/Tourist';
import {Flight} from '../model/Flight';


@Injectable({
  providedIn: 'root'
})
export class TouristService {


  private BASE_URL = 'http://localhost:8080/api/tourists';
  private  ALL_TOURISTS_URL = `${this.BASE_URL}\\all\\`;
  private  CREATE_TOURIST_URL = `${this.BASE_URL}`;
  private DELETE_TOURIST_URL = `${this.BASE_URL}\\delete\\`;
  private GET_TOURIST_BY_ID_URL = `${this.BASE_URL}\\edit\\`;
  constructor(private http: HttpClient) {

  }
  getAllTourists(): Observable<Tourist[]> {
    return this.http.get<Tourist[]>(this.ALL_TOURISTS_URL);
  }

  createTourist(tourist: Tourist): Observable<any> {
     return this.http.post(this.CREATE_TOURIST_URL, tourist);
  }
  getCountries() {
    return this.http.get<string[]>('https://restcountries.eu/rest/v2/all');
  }
  deleteTourist(id: number) {
    return this.http.delete(this.DELETE_TOURIST_URL + id);
  }
  getTouristById(id: number): Observable<Tourist>{
    return this.http.get<Tourist>(this.GET_TOURIST_BY_ID_URL + id);
  }

}
