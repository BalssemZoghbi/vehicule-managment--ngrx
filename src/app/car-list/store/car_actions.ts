import { createAction, props } from '@ngrx/store';
import { Car } from 'src/app/Models/Car.model';

export const addCar = createAction('Add Car', props<{car:Car}>());
export const removeCar = createAction('Remove car', props<{id: number}>());
