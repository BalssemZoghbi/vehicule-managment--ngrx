import { Store } from '@ngrx/store';
import { Car } from '../Models/Car.model';
import { Component, OnInit } from '@angular/core';
import CarService from './car.service';
import { Observable } from 'rxjs';
import { removeCar } from './store/car_actions';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-car',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  cars: Observable<Car[]> = new Observable<Car[]>();
  // private subscription!:Subscription;

  constructor(
    private carService: CarService,
    private store: Store<{ cars: Car[] }>
  ) {}

  ngOnInit(): void {
    this.cars = this.store.select('cars');
    this.store.select('cars').subscribe((cars) => {
      console.log(cars);
    });

    // this.cars=this.carService.getCars();
    //   this.carService.carsChanged.subscribe(
    //     (cars:Car[])=>{
    //       this.cars=cars;
    //     }
    //   )
  }
  onDeletecar(carId: number) {
    console.log("hahaaa");
    
    this.store.dispatch(removeCar({ id: carId }));
    //DOES NOTHING
    // this.carService.deleteCar(carId);
  }
}
