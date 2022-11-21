
import { Vehicle } from "./Vehicle";
/**
 * @template T
 * @extends {Vehicle<T>}
 */
export class Truck extends Vehicle {
  private _trailerWeight: number;
  /**
   * @param {number} id 
   * @param {string} name 
   * @param {number} price 
   * @param {number} trailerWeight
   * @param {string} owner
   */
  constructor(id: number, name: string, price: number, trailerWeight: number,owner:string) {
    super(id, name, price,owner);
    this._trailerWeight = trailerWeight;
  }
  /*
  * affichage
  */

    public affiche(): string {
    return `Id: ${this.id} Name: ${this.name} Price: ${this.price} Trailer Weight: ${this.trailerWeight}`;
  }

  /*
  * Getters
  */
 /** 
  @type {number}
  */
  public get trailerWeight(): number {
    return this._trailerWeight;
  }

}
