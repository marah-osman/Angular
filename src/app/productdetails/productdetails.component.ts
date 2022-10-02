import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../Services/product.service';
import { IProduct } from '../Shared-Classes-and types/Iproduct';
import {Location} from '@angular/common';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.sass']
})
export class ProductdetailsComponent implements OnInit {
  prod: any;
  // prod: IProduct[]=[];
  constructor(private activeRoute: ActivatedRoute,
    private prdService: ProductserviceService,
    private router: Router,
    private location: Location) { }
   
  ngOnInit(): void {
    let prdID = this.activeRoute.snapshot.paramMap.get('pid');
    // console.log(prdID);
    
     let product2= this.prdService.getProductByID(Number(prdID));
    this.prod=product2;
    console.log(product2)
  
  }
  goBack(){
    this.location.back();
  }


}
