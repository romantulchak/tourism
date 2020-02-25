import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITourist} from '../model/ITourist';
import {IFlight} from '../model/IFlight';
import {Country} from '../model/Country';


@Injectable({
  providedIn: 'root'
})
export class TouristService {


  private BASE_URL = 'http://localhost:8080/api/tourists';
  private  ALL_TOURISTS_URL = `${this.BASE_URL}\\all\\`;
  private  CREATE_TOURIST_URL = `${this.BASE_URL}\\create\\`;
  private DELETE_TOURIST_URL = `${this.BASE_URL}\\delete\\`;
  private GET_TOURIST_BY_ID_URL = `${this.BASE_URL}\\edit\\`;

  private ADD_FLIGH_URL = `${this.BASE_URL}\\addFlight\\`;
  private DELETE_FLIGH_URL = `${this.BASE_URL}\\deleteFlight\\`;

  constructor(private http: HttpClient) {

  }
  getAllTourists(): Observable<ITourist[]> {
    return this.http.get<ITourist[]>(this.ALL_TOURISTS_URL);
  }

  createTourist(tourist: ITourist): Observable<any> {
     return this.http.post(this.CREATE_TOURIST_URL, tourist);
  }
  getCountries() {
    return this.http.get<string[]>('https://restcountries.eu/rest/v2/all');
  }
  getC(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  deleteTourist(id: number): Observable<ITourist[]> {
    return this.http.delete<ITourist[]>(this.DELETE_TOURIST_URL + id);
  }
  getTouristById(id: number): Observable<ITourist> {
    return this.http.get<ITourist>(this.GET_TOURIST_BY_ID_URL + id);
  }
  addFlight(flight: IFlight, id: number, places: number): Observable<any> {
    const body = {flight, places};
    return this.http.put<string>(this.ADD_FLIGH_URL + id, body);
  }
  deleteFlight(touristId: number, flightId: number): Observable<string> {
    return this.http.delete<string>(this.DELETE_FLIGH_URL + touristId + '/' + flightId);
  }

}
