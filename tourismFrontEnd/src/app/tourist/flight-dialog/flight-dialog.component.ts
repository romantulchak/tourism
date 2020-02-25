import {Component, Inject, OnInit} from '@angular/core';
import {IFlight} from '../../model/IFlight';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EditTouristComponent} from '../edit-tourist/edit-tourist.component';
import {
  faBirthdayCake, faDollarSign,
  faGenderless,
  faLocationArrow,
  faLongArrowAltRight, faMoneyBill,
  faPlaneArrival,
  faPlaneDeparture, faShoppingCart, faUser, faUserFriends
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-flight-dialog',
  templateUrl: './flight-dialog.component.html',
  styleUrls: ['../edit-tourist/edit-tourist.component.css']
})
export class FlightDialogComponent implements OnInit {
  flight: IFlight;
  faLocation = faLocationArrow;
  faGender = faGenderless;
  faBirthday = faBirthdayCake;
  faUser = faUser;
  faRightArrow = faLongArrowAltRight;
  faDeparture = faPlaneDeparture;
  faArrival = faPlaneArrival;
  faMoney = faMoneyBill;
  faDollar = faDollarSign;
  faPeople = faUserFriends;

  constructor(public dialogRef: MatDialogRef<EditTouristComponent>, @Inject(MAT_DIALOG_DATA) public data) {

    this.flight = this.data;
  }

  ngOnInit(): void {

  }

}
