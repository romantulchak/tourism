import {AfterContentChecked, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TouristService} from '../../shared/tourist.service';
import {ITourist} from '../../model/ITourist';
import {ActivatedRoute, Router} from '@angular/router';
import {IFlight} from '../../model/IFlight';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {FlightService} from '../../shared/flight.service';
import {MatDialog} from '@angular/material/dialog';
import {faSearchLocation} from '@fortawesome/free-solid-svg-icons/faSearchLocation';
import {FlightComponent} from '../../flight/flight.component';
import {EditFlightComponent} from '../../edit-flight/edit-flight.component';
import {FlightDialogComponent} from '../flight-dialog/flight-dialog.component';
import {
  faBirthdayCake, faDollarSign,
  faGenderless,
  faLongArrowAltRight, faMoneyBill,
  faPlaneArrival,
  faPlaneDeparture,
  faShare, faShoppingCart, faSpinner, faTrash,
  faUser, faUserFriends, faChair
} from '@fortawesome/free-solid-svg-icons';
import {Country} from '../../model/Country';


@Component({
  selector: 'app-edit-tourist',
  templateUrl: './edit-tourist.component.html',
  styleUrls: ['./edit-tourist.component.css']
})
export class EditTouristComponent implements OnInit {
  pageOfItems: IFlight[];
  addFLight = false;
  id: number;
  tourist: ITourist;
  flights: IFlight[];
  messages: string;
  loading = true;
  setColor = true;
  pageOfItems1: IFlight[];
  flag: string;
  countries: Country[];
  buttonLoading = false;
  currentFlight: IFlight;


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
  faChair = faChair;
  @ViewChild('places') places: ElementRef;


  constructor(private dialog: MatDialog, private flightService: FlightService, private touristService: TouristService, router: Router, activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getAllFlights();
    this.edit(this.id);
    this.getCountry();
  }
  public showDialog(flightToOpen: IFlight) {
    const dialogRef = this.dialog.open(FlightDialogComponent, {
      data: {
        location: flightToOpen.location,
        direction: flightToOpen.direction,
        timeOfDeparture: flightToOpen.timeOfDeparture,
        arrivalTime: flightToOpen.arrivalTime,
        numberOfSeats: flightToOpen.numberOfSeats,
        ticketPrice: flightToOpen.ticketPrice
      },
      panelClass: 'dialog'
    });
  }


  public edit( id: number) {
    this.touristService.getTouristById(id).subscribe(
      res => {
        this.tourist = res;
        if (this.tourist != null) {
          setTimeout(() => {
            this.loading = false;
          }, 2300);
        }
      },
      error => {
        console.log('An error');
      }
    );
  }
  public getCountry() {
    this.touristService.getC().subscribe(
      res => {
        this.countries = res;
        if (this.countries != null) {
          this.getFlag();
        }
    },
      error => {console.log('An error'); }

    );
  }

  public getFlag() {
    this.countries.filter(s => s.name.toLowerCase().includes(this.tourist.country.toLowerCase()) ? this.flag =  s.flag : 'kjkl' );
  }

  public addFlight() {
    this.addFLight = !this.addFLight;
    this.flightService.allFlights().subscribe(
        res => {this.flights = res; },
        error => {console.log('An error'); }
      );
    }


  public chooseFlight(flight: IFlight, id: number, places: number) {
      this.currentFlight = flight;
      this.buttonLoading = true;
      this.touristService.addFlight(flight, id, places).subscribe(
        res => {
            this.edit(this.id);
            this.getAllFlights();
            setTimeout(() => {
                this.buttonLoading = false;
            }, 1100);
            console.log(res);
        },
        error => {
          console.log(error.error.text);
        }
      );
    }

  public getAllFlights() {
    this.flightService.allFlights().subscribe(
      res => {this.flights = res; }
    );
  }

  public deleteFlight(touristId: number,  flightId: number, flight: IFlight) {
    this.currentFlight = flight;
    this.buttonLoading = true;
      this.touristService.deleteFlight(touristId, flightId).subscribe(
        res => {
          this.edit(this.id);
          this.getAllFlights();
          setTimeout(()=>{
              this.buttonLoading = false;
          },1000);
          console.log(this.messages);
          },
            error => {
            console.log(error);
        }
      );
  }
  ngOnChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  public getRandomColor() {
    if (this.setColor) {
      let color = '#';
      for (let i = 0; i < 3; i++) {
        const part = Math.round(Math.random() * 255).toString(16);
        color += (part.length > 1) ? part : '0' + part;
      }

      return color;
    }
    return '#000';
  }
  public onChangePageToAdd(pageOfItems: Array<any>){
    this.pageOfItems1 = pageOfItems;
  }

}
