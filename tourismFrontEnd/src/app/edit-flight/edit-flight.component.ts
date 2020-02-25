import { Component, OnInit } from '@angular/core';
import {IFlight} from '../model/IFlight';
import {FlightService} from '../shared/flight.service';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TouristService} from '../shared/tourist.service';
import {ITourist} from '../model/ITourist';
import {element} from 'protractor';
import {
  faBirthdayCake, faDollarSign,
  faGenderless,
  faLongArrowAltRight,
  faMoneyBill,
  faPlaneArrival,
  faPlaneDeparture, faShoppingCart, faUserFriends, faUser, faSpinner, faEdit, faTrash, faChair
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {
  currentTourist: ITourist;
  isShow = false;
  buttonLoading = false;
  flight: IFlight;
  id: number;
  addTourist = false;
  isAdd = false;
  tourists: ITourist[];
  touristsToAdd: ITourist[];
  pageOfItems: ITourist[];
  pageOfItemsToAdd: ITourist[];
  faRightArrow = faLongArrowAltRight;
  faGender = faGenderless;
  faBirthday = faBirthdayCake;
  faUser = faUser;
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
  loading = false;
  constructor(private flightService: FlightService, private touristService: TouristService, route: Router, activeRoute: ActivatedRoute) {
        this.id = activeRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.edit();

  }

  public edit() {
    this.loading = true;
    this.flightService.editFlight(this.id).subscribe(
      res => {
        this.flight = res;
        this.getTouristToAdd();
        if (this.flight !=null){
          setTimeout(()=>{
            this.loading = false;
          },2000);
        }

      },
      error => {console.log('An error'); }
    );
  }
  public delete(touristId: number, tourist: ITourist) {
    this.buttonLoading = true;
    this.currentTourist = tourist;
    this.flightService.deleteTouristFromFlight(this.id, touristId).subscribe(
        res => { this.edit(); },
      error => {console.log('An error'); }
    );
  }

  public getTourist() {
    this.isAdd = !this.isAdd;
    this.addTourist = !this.addTourist;
    this.touristService.getAllTourists().subscribe(
      res => {
          console.log(res);
          this.tourists = res;

      },
      error => {console.log('An error'); }

    );

  }

  public getTouristToAdd() {
     this.touristService.getAllTourists().subscribe(
       res => {
         this.touristsToAdd = res;
         this.touristsToAdd.forEach(element => {
           console.log(element);
                element.flights.forEach((el, index) => {
                  this.touristsToAdd.splice(index, 1);
                });
            });
         console.log(this.touristsToAdd);
         },
         error => {console.log('An error'); }
     );
  }

  public addTouristToFlight(flight: IFlight, tourist: ITourist){
    this.currentTourist = tourist;
    this.buttonLoading = true;
    this.flightService.addTouristToFlight(flight, tourist).subscribe(
      res => {this.edit(); this.getTouristToAdd();
        setTimeout(()=>{
              this.buttonLoading = false;
        },1000);
      },
         error => {console.log(error.error);}
    );
  }

  public onChangePage(pageOfItems: Array<any>){
    this.pageOfItems = pageOfItems;
  }
  public onChangePageToAdd(pageOfItems: Array<any>){
    this.pageOfItemsToAdd = pageOfItems;
  }
}
