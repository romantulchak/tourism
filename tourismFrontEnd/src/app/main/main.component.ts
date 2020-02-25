import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input} from '@angular/core';
import {IFlight} from '../model/IFlight';
import {FlightService} from '../shared/flight.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {
  faBirthdayCake, faDollarSign,
  faGenderless,
  faLongArrowAltRight,
  faMoneyBill,
  faPlaneArrival,
  faPlaneDeparture, faShoppingCart, faUserFriends, faUser, faSpinner, faTrash, faEdit, faChair, faSearch
} from '@fortawesome/free-solid-svg-icons';
import {DatePipe} from '@angular/common';
export interface User {
  name: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[DatePipe]
})
export class MainComponent implements OnInit {

  isLocationAndDirection = false;


  faGender = faGenderless;
  faBirthday = faBirthdayCake;
  faUser = faUser;
  faRightArrow = faLongArrowAltRight;
  faDeparture = faPlaneDeparture;
  faArrival = faPlaneArrival;
  faMoney = faMoneyBill;
  faDollar = faDollarSign;
  faPeople = faUserFriends;
  faShop = faShoppingCart;
  faSpinner = faSpinner;
  faTrash = faTrash;
  faEdit = faEdit;
  faChair = faChair;
  faSearch = faSearch;
  buttonLoading = false;
@ViewChild('location') location: ElementRef = null;
  @ViewChild('direction') direction: ElementRef = null;


  public arTime: string;
  public ofDepTime: string;

  public loading = false;
  flights: IFlight[];
  pageOfItems: IFlight[];

  constructor(private flightService: FlightService, private datePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.flightService.allFlights().subscribe(res => {
      this.flights = res;
      if(this.flights !=null){
        setTimeout(()=>{
          this.loading = false;
        },1000);
      }
    });
  }











  public dateFormat(arrivalTime: string, timeOfDeparture: string) {
    const arrivalDate1 = this.datePipe.transform(arrivalTime, 'yyyy-MM-dd hh:mm');
    const departureDate1 =  this.datePipe.transform(timeOfDeparture, 'yyyy-MM-dd hh:mm');
    this.arTime =   arrivalDate1;
    this.ofDepTime = departureDate1;
  }




  getFlightsByParams(departureTime: string, arrivalTime: string, numberOfSeats?: string, location?: string, direction?: string) {
    this.buttonLoading = true;
    this.dateFormat(arrivalTime, departureTime);
    this.flightService.getFlightsByParams(location, direction, numberOfSeats, this.ofDepTime, this.arTime).subscribe(
      res => {
        this.flights = res;
        if(this.flights != null){
          setTimeout(()=>{
              this.buttonLoading = false;
          }, 1000);
        }
      },
      error => {
          console.log('An error');
      }
    );
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
