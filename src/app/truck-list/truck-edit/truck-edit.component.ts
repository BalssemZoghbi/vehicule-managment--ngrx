import { addTruck } from './../store/truck_actions';
import { Truck } from './../../Models/Truck.model';
import { Component, OnInit  } from '@angular/core';
import TruckService from '../truck.sevice';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.css']
})
export class TruckEditComponent implements OnInit {



  constructor(private truckService:TruckService,private store:Store<{trucks:Truck[]}>) { }

  ngOnInit() {
  }
/**
 * 
 * @param form 
 */
  onAddItem(form:NgForm) {
    const value=form.value;
    const truck = new Truck(value._id,value.name, value.price,value.trailerWeight,value._owner);
    this.store.dispatch(addTruck({truck}));

  }

}
