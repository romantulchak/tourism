import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightComponent} from './flight/flight.component';
import { TouristComponent } from './tourist/tourist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {CreateTouristComponent} from './create-tourist/create-tourist.component';
import {EditTouristComponent} from './edit-tourist/edit-tourist.component';
import {MainComponent} from './main/main.component';


const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'createTourist', component: CreateTouristComponent},
  {path: 'allTourists', component: TouristComponent},
  {path: 'editTourist/:id', component: EditTouristComponent},
  {path: 'createFlight', component: FlightComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
