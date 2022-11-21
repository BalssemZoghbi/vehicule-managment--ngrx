import { createReducer, on } from '@ngrx/store';
import { Car } from 'src/app/Models/Car.model';
import { addCar, removeCar } from './car_actions';
const initial_state = [
    new Car(1, 'porche', 2400000, 3, 'Balssem'),
    new Car(2, 'porche', 4000000, 3, 'Folen'),
  ];
export const carReducer = createReducer(
  initial_state,
  on(addCar, (state, {car}) => {
    return [...state, car];
  }),
  on(removeCar, (state, {id}) => {
    let cars= state;
    console.table(cars);
    let index = cars.findIndex((d) => d.id === id);
    cars.splice(index, 1);
    console.log("After: ");
    console.table(cars);
    return state;
  })
);
