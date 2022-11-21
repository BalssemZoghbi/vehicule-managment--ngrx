import { InterfaceVehicule } from "../Interfaces/vehicule.interface";


export abstract class  Vehicle implements InterfaceVehicule {
  _id: number;
  _name: string;
  _price: number;
  _owner?:string
  /**
   * @param {number} id 
   * @param {string} name 
   * @param {number} price
   * @param {string} owner 
   */
  constructor(id: number, name: string, price: number,owner?:string) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._owner=owner;

  }

abstract affiche(): string 
    /*
  * Getters
  */
 /** 
  @type {number}
  */
   get id(): number {
    return this._id;
  }
 /**
  * @param {string} ids
  */
  set id(ids: number) {
    this._id = ids;
  }
   /** 
  @type {string}
  */
   get name(): string {
    return this._name;
  }
   /**
  * @param {string} names
  * 
  */
  set name(names: string) {
    this._name = names;
  }
   /** 
  @type {number}
  */
  public get price(): number {
    return this._price;
  }
   /**
  * @param {number} prices
  */
  set price(prices: number) {
    this._price = prices;
  }

 /**
  * @param {string} ownerName
  */
  public set owner(ownerName:string){
   this._owner=ownerName;
 }


}
