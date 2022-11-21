import { addTruck, removeTruck } from './truck_actions';
import { createReducer, on } from '@ngrx/store';
import { Truck } from 'src/app/Models/Truck.model';

const initial_state = [
    new Truck(1, 'isuzu', 2400000, 3, 'folen'),
    new Truck(2, 'porche', 4000000, 3, 'Folen'),
  ];
export const truckReducer = createReducer(
  initial_state,
  on(addTruck, (state, {truck}) => {
    return [...state, truck];
  }),
  on(removeTruck, (state, {id}) => {
    let trucks= state;
    console.table(trucks);
    let index = trucks.findIndex((d) => d.id === id);
    trucks.splice(index, 1);
    console.log("After: ");
    console.table(trucks);
    return [...state];
  })
);
