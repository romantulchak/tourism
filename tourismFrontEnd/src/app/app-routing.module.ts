import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightComponent} from './flight/flight.component';
import { TouristComponent } from './tourist/tourist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CreateTouristComponent} from './tourist/create-tourist/create-tourist.component';
import {EditTouristComponent} from './tourist/edit-tourist/edit-tourist.component';
import {MainComponent} from './main/main.component';
import {CreateFlightComponent} from './create-flight/create-flight.component';
import {EditFlightComponent} from './edit-flight/edit-flight.component';


const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'createTourist', component: CreateTouristComponent},
  {path: 'createFlight', component: CreateFlightComponent},
  {path: 'allTourists', component: TouristComponent},
  {path: 'allFlights', component: FlightComponent},
  {path: 'editTourist/:id', component: EditTouristComponent},
  {path: 'editFlight/:id', component: EditFlightComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
