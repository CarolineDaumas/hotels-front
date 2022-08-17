import { City } from "./city.model";

export class Hotel {
    id : number;
    name : string;
    address : string;
    numberStars: number;
    availableRooms: number;
    price : number;
    img: string;
    city: City;
  // static id: number;
  // static quantity: number;

    constructor(id:number,name:string,address:string,numberStars:number, availableRooms:number, price:number,img: string, city: City) {
        this.id = id;
        this.name = name;
        this.address=address;
        this.numberStars=numberStars;
        this.availableRooms=availableRooms;
        this.price = price;
        this.img = img;
        this.city = city;
    }
};