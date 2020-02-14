import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TouristComponent } from './tourist/tourist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlightComponent } from './flight/flight.component';
import {FormsModule} from '@angular/forms';
import { CreateTouristComponent } from './create-tourist/create-tourist.component';
import {HttpClientModule} from '@angular/common/http';
import { EditTouristComponent } from './edit-tourist/edit-tourist.component';
import { MainComponent } from './main/main.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
