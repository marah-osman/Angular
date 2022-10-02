import { Injectable } from '@angular/core';
import { Icar } from '../Shared-Classes-and types/Icar';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars : Icar[];
  constructor() {
    this.cars = [
      { id: 100, name: "kia",model:2010, price: 100000000 },
      { id: 200, name:"BMW",model:2016, price: 2007780 },
      { id: 300, name: "ferary",model:2022, price: 3000 }
    ];
   }
   DisplayAllCar():Icar[]{
    return this.cars;
   }
   DisplayCarByName(CarName: string): Icar | null
   {
       let foundcar=this.cars.find(car=>car.name==CarName);
       return foundcar? foundcar: null;
   }
}