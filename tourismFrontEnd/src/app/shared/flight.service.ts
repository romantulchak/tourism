import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { IFlight } from '../model/IFlight';
import {Observable} from 'rxjs';
import {ITourist} from '../model/ITourist';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private BASE_URL = 'http://localhost:8080/api/flights';
  private CREATE_FLIGHT_URL = `${this.BASE_URL}\\create\\`;
  private DELETE_FLIGHT_URL = `${this.BASE_URL}\\delete\\`;
  private EDIT_FLIGHT_URL = `${this.BASE_URL}\\editFlight\\`;
  private DELETE_TOURIST_FROM_FLIGHT = `${this.BASE_URL}\\deleteTouristFromFlight\\`;
  private EDIT_TOURIST_FROM_FLIGHT = `${this.BASE_URL}\\addTouristToFlight\\`;
  private GET_FLIGHT_BY_PARAMS = `${this.BASE_URL}\/getFlightsBy\/`;
  constructor(private http: HttpClient) { }

  createFlight(flight: IFlight): Observable<any> {
    return this.http.post(this.CREATE_FLIGHT_URL, flight);
  }
  allFlights(): Observable<IFlight[]> {
    return this.http.get<IFlight[]>(this.BASE_URL);
  }
  delete(id: number){
    return this.http.delete(this.DELETE_FLIGHT_URL + id);
  }
  editFlight(id: number): Observable<IFlight>{
    return this.http.get<IFlight>(this.EDIT_FLIGHT_URL + id);
  }
  deleteTouristFromFlight(flightId: number, touristId: number){
    return this.http.delete(this.DELETE_TOURIST_FROM_FLIGHT + flightId + '/' + touristId);
  }
  addTouristToFlight(flight: IFlight, tourist: ITourist ){
    const body = { flight, tourist};
    return this.http.put(this.EDIT_TOURIST_FROM_FLIGHT, body);
  }

  getFlightsByParams(location: string, direction: string, numberOfSeats: string, departureTime: string, arrivalTime: string): Observable<IFlight[]>{
    let paramsd = new HttpParams();
    paramsd = paramsd.append('location', location);
    paramsd = paramsd.append('direction', direction);
    paramsd = paramsd.append('numberOfSeats', numberOfSeats);
    paramsd = paramsd.append('departureTime', departureTime);
    paramsd = paramsd.append('arrivalTime', arrivalTime);



    return this.http.get<IFlight[]>(this.GET_FLIGHT_BY_PARAMS, {params: paramsd});
  }
}
