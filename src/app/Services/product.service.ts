import { Injectable } from '@angular/core';
import { IProduct } from '../Shared-Classes-and types/Iproduct';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  ProductList : IProduct[]=[];
  constructor() {
    this.ProductList = [
      { id: 1, name: 'LenovoThinkpad laptop', price: 100000000, quantity: 1, img:'/assets/images/LAPTOP.png' },
      { id: 2, name: 'Apple MacBook laptop', price: 2007780, quantity: 0, img: '/assets/images/LAPTOP.png' },
      { id: 3, name: 'Lenovo Tab 2', price: 3000, quantity: 10, img: '/assets/images/LAPTOP.png' },
      { id: 4, name: 'IPad', price: 4000, quantity: 10, img: '/assets/images/LAPTOP.png' },
      { id: 5, name: 'Iphone 9', price: 5000, quantity: 10, img: '/assets/images/LAPTOP.png' }
    ];
   }
   getAllproducts():IProduct[]{
    return this.ProductList;
   }
   getProductByID(pID: number): IProduct | null
   {
       let foundProduct=this.ProductList.find((prd)=>prd.id==pID);
       return foundProduct? foundProduct: null;
   }
}
