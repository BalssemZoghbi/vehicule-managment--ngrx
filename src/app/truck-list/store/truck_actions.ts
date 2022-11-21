import { createAction, props } from '@ngrx/store';
import { Truck } from 'src/app/Models/Truck.model';

export const addTruck = createAction('Add Truck', props<{truck:Truck}>());
export const removeTruck = createAction('Remove Truck', props<{id: number}>());
