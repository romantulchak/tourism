import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FlightService} from '../shared/flight.service';
import {IFlight} from '../model/IFlight';
import {ITourist} from '../model/ITourist';
import {
  faBirthdayCake, faChair, faDollarSign, faEdit,
  faGenderless,
  faLongArrowAltRight,
  faMoneyBill,
  faPlaneArrival,
  faPlaneDeparture, faShoppingCart, faSpinner, faTrash, faUser, faUserFriends
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  buttonLoading = false;
  loading = false;
  currentFlight: IFlight;
  pageOfItems: Array<IFlight>;
  flights: IFlight[];

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
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.allFlights();
  }
  public allFlights() {
    this.loading = true;
    this.flightService.allFlights().subscribe(
      res => {
        this.flights = res;
        if (res != null){
          setTimeout(()=>{
            this.loading = false;
          },1000);
        }
      },
          error => {console.log('An error'); }
    );
  }
  public delete(id: number, flight: IFlight) {
    this.buttonLoading = true;
    this.currentFlight = flight;
    this.flightService.delete(id).subscribe(
      res => {
        this.allFlights();
        setTimeout(()=>{
          this.buttonLoading = false;
        },1200);
      },
      error => {console.log('An error'); }
    );
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
