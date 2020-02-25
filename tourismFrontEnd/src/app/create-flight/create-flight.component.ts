import { Component, OnInit } from '@angular/core';
import {FlightService} from '../shared/flight.service';
import {IFlight} from '../model/IFlight';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css'],
  providers: [DatePipe]
})
export class CreateFlightComponent implements OnInit {

  private currentYear = new Date().getFullYear();
  private currentMonth = new Date().getMonth();
  private currentDate = new Date().getDate();
  private currentHours = new Date().getHours();
  private currentMinutes = new Date().getMinutes();
  public min = new Date(this.currentYear, this.currentMonth, this.currentDate, this.currentHours, this.currentMinutes);
  public loading = false;

  model: IFlight = {
    id: null,
    location: '',
    direction: '',
    ticketPrice: null,
    numberOfSeats: null,
    arrivalTime: null,
    timeOfDeparture: null,
    tourists: null,
  };

  constructor(private flightService: FlightService, public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(()=>{
      this.loading = false;
    },1000)
  }

  public dateFormat() {
    const arrivalDate = this.datePipe.transform(this.model.arrivalTime, 'yyyy-MM-dd hh:mm');
    const departureDate =  this.datePipe.transform(this.model.timeOfDeparture, 'yyyy-MM-dd hh:mm');
    this.model.arrivalTime = arrivalDate;
    this.model.timeOfDeparture = departureDate;
  }

  public createFlight() {
    this.dateFormat();
    this.flightService.createFlight(this.model).subscribe(
      res => {location.reload(); },
      error => {console.log('An error'); }
    );
  }

}
