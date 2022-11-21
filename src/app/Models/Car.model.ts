import { Vehicle } from "./Vehicle";
/**
 * @template T
 * @extends {Vehicle<T>}
 */
export class Car extends Vehicle {
  private _numberOfSeats: number;
  /** attribut
    @param {number} id 
    @param {string} name 
    @param {number} price 
    @param {number} numberOfSeats 
    @param {string} owner 
   */
  constructor(id: number, name: string, price: number, numberOfSeats: number,owner?:string) {
    super(id, name, price,owner);
    this._numberOfSeats = numberOfSeats;
  }

/**
 * affiche 
 * @returns {string}
 */

  public affiche(): string {
    return `Id: ${this.id} Name: ${this.name} Price: ${this.price}  Number of Seats: ${this.numberOfSeats}`;
  }

  /*
  * Getters
  */

 /**
   * @type {number}
   */
    get numberOfSeats(): number {
    return this._numberOfSeats;
  }
 /*
  * Setters
 */
 /**
  * @param {number} seats
  */
  set numberOfSeats(seats: number) {
    this._numberOfSeats = seats;
  }

 
}
