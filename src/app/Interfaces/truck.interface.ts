import { InterfaceVehicule } from './vehicule.interface';
/**
 * @template T
 * @extends {InterfaceVehicule<T>}
 */
export interface TruckInterface extends InterfaceVehicule{
    trailerWeight: number;
}