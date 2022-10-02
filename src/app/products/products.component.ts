import { Component, OnInit } from '@angular/core';
import { Discountoffer } from '../Shared-Classes-and types/Discount';
import { IProduct } from '../Shared-Classes-and types/Iproduct';
import { ICategory } from '../Shared-Classes-and types/Icategory';
import { ProductserviceService } from '../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
 
  
  ProductList!: IProduct[];
  Product!: IProduct;
  CategoryList : ICategory[];
  clientName:string="";
  IsPurshased: Boolean=true;
  location: any;
  clicked(){
    this.IsPurshased =! this.IsPurshased;
  }
  constructor(private prdservice:ProductserviceService,private router:Router) {
    this.ProductList= this.prdservice.getAllproducts();
   this.CategoryList=[
    { id: 1, name: 'windows laptop'},
    { id: 2, name: 'mac laptop'},
    { id: 2, name: 'linux laptop'}
   ]
   }
   renderValues(){
   return this.ProductList= this.prdservice.getAllproducts();
   }

  ngOnInit(): void {
     this.ProductList= this.prdservice.getAllproducts();

    // let product2= this.prdservice.getProductByID(1);
    // this.Product=product2;
    // console.log(product2)
  }
  goToproductdetails(pid:any){
    this.router.navigate(['/product',pid]);

  }
 

}
