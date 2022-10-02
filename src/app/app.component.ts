import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './Shared-Classes-and types/Iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
 
  title = 'myDay1';
  // proo2:IProduct[]=[];
  // @ViewChild(ProductsComponent) prdListCompObj= {} as ProductsComponent;
  // @ViewChild(ProductsComponent) prdListCompObj!: ProductsComponent; //Non-null asseration operator i know is never be null dont worry
   
  //   IsPurshased:boolean=true;
   ngAfterViewInit(): void {
  //   // this.prdListCompObj.ProductList;
  //   this.proo2= this.prdListCompObj.renderValues();
   
   }
// Display(){
//   this.IsPurshased =! this.IsPurshased;
// }
}
