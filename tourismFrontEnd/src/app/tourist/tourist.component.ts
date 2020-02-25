import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITourist} from '../model/ITourist';
import {TouristService} from '../shared/tourist.service';
import {faEdit, faSpinner, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tourist',
  templateUrl: './tourist.component.html',
  styleUrls: ['./tourist.component.css']
})
export class TouristComponent implements OnInit {

  currentTourist: ITourist;
  searchBySurname: string;
  tourists: ITourist[] = [];
  public loading = true;
  public buttonLoading = false;
  public currentButtonLoading = false;
  pageOfItems: ITourist[];
  faSpinner = faSpinner;
  faTrash = faTrash;
  faEdit = faEdit;



  constructor(private touristService: TouristService) { }

  ngOnInit(): void {
    this.getAllTourists();
  }


  public getAllTourists() {
    this.touristService.getAllTourists().subscribe(
        res => {
          this.tourists = res;
          if (this.tourists != null) {


            setInterval(() => {
              this.loading = false;
            }, 1000);
            }
          },
        error => {
          console.log('An error');
        }
      );
  }







  public deleteTourist(id: number, tourist: ITourist) {
    this.currentTourist = tourist;
    this.buttonLoading = !this.buttonLoading;
    this.touristService.deleteTourist(id).subscribe(
      res => {
          this.tourists = this.getAfterDelete();
          if (this.tourists != null) {
                setTimeout(() => {
                  this.buttonLoading = !this.buttonLoading;
                  this.currentTourist = null;
                }, 2000);
          }
      },
      error => {console.log('An error'); }
    );
  }


  public getAfterDelete(): ITourist[] {
      this.touristService.getAllTourists().subscribe(
        res => {
          this.tourists = res;
        },
        error => {
          console.log('An error');
        }
      );
      return this.tourists;
  }


  ngOnChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }


}
