import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarEditComponent } from './car-list/car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { TruckEditComponent } from './truck-list/truck-edit/truck-edit.component';
import CarService from './car-list/car.service';
import TruckService from './truck-list/truck.sevice';
import { carReducer } from './car-list/store/car.reducer';
import { truckReducer } from './truck-list/store/truck.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarListComponent,
    CarEditComponent,
    TruckListComponent,
    TruckEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({cars: carReducer,trucks: truckReducer}),
  ],
  providers: [CarService,TruckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
