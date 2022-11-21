import { removeTruck } from './store/truck_actions';
import { Truck } from './../Models/Truck.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import TruckService from './truck.sevice';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent implements OnInit,OnDestroy {
  // public trucks : Truck[] = [];
  trucks: Observable<Truck[]> = new Observable<Truck[]>();

  subscription: Subscription=new Subscription;

      constructor(private trukService:TruckService ,
          private store: Store<{ trucks: Truck[] }>
        ) {  }
    
      ngOnInit(): void {
      this.trucks = this.store.select('trucks');
        this.store.select('trucks').subscribe((trucks) => {
          console.log(trucks);
    });
      }
      onDeleteTruck(truckId:number){
    
        this.store.dispatch(removeTruck({ id: truckId }));
      }
    ngOnDestroy(): void {
      console.log("hey");
      
      this.subscription.unsubscribe();   }
}
