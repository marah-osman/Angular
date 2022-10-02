import { Component, OnInit } from '@angular/core';
import { Discountoffer } from '../Shared-Classes-and types/Discount';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  Storename :string;
  Storelogo :string;
  Discount:Discountoffer;
  constructor() {
    this.Storename="Laptop market";
    this.Storelogo="assets/images/eco2.png";
    this.Discount= Discountoffer['c'];
  
   }

  ngOnInit(): void {
  }

}
