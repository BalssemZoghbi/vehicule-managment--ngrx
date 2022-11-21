import { InterfaceVehicule } from "./vehicule.interface";
/**
 * @template T
 * @extends {InterfaceVehicule<T>}
 */
export interface CarInterface extends InterfaceVehicule{
    numberOfSeats: number;
}