import { Component, OnInit } from '@angular/core';
import { CarService } from '../Services/car.service';
import { Icar } from '../Shared-Classes-and types/Icar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {
  carss:Icar[]=[];
  constructor(private carservice:CarService) { }
 
  ngOnInit(): void {
    this.carss=this.carservice.DisplayAllCar();
  }

}
