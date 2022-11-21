import { FormArray, NgForm } from '@angular/forms';
import { Car } from '../../Models/Car.model';
import { Component, OnInit} from '@angular/core';
import CarService from '../car.service';
import { Store } from '@ngrx/store';
import { addCar } from '../store/car_actions';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  constructor(private carService:CarService,private store:Store<{cars:Car[]}>) { 
  }

  ngOnInit() {
  }

  onAddItem(form:NgForm) {
    const value=form.value;
    const car = new Car(value._id,value.name, value.price,value.numberOfSeats,value._owner);
    console.log("jh",value.id);
    
    this.store.dispatch(addCar({car}));
    // this.carService.addCar(newCar);
  }
  
}
