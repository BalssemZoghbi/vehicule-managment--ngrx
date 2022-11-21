
 /**
 * @typedef {Object} vehicules - creates a new type named 'vehicules'
 * @property {string} name - a string property of vehicules
 * @property {number} price - a number property of vehicules
 * @property {string=} owner - an optional string property of vehicules
 */
type vehicules={
    name: string;
    price: number;
    owner?:string;
}
/**
 * @instance 
 */
export interface InterfaceVehicule extends vehicules{
    id: number;
}
