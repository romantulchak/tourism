import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TouristComponent } from './tourist/tourist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlightComponent } from './flight/flight.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateTouristComponent } from './tourist/create-tourist/create-tourist.component';
import {HttpClientModule} from '@angular/common/http';
import { EditTouristComponent } from './tourist/edit-tourist/edit-tourist.component';
import { MainComponent } from './main/main.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import {TouristService} from './shared/tourist.service';
import {FlightService} from './shared/flight.service';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component';
import { PaginationComponent } from './pagination/pagination.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { TouristFilterPipe } from './pipes/tourist-filter.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import { FlightDialogComponent } from './tourist/flight-dialog/flight-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TouristComponent,
    NotFoundComponent,
    FlightComponent,
    CreateTouristComponent,
    EditTouristComponent,
    MainComponent,
    CreateFlightComponent,
    NotificationComponent,
    PaginationComponent,
    EditFlightComponent,
    TouristFilterPipe,
    FlightDialogComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MatDialogModule,
        FontAwesomeModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule
    ],
  providers: [TouristService, FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
