import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../Client';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private clientService:ClientService,private fb:FormBuilder) { }
  // registerationForm=this.fb.group({
  //   userName:[''],
  //   Email:[''],
  //   password:['',Validators.required,Validators.minLength(8)],
  //   confirmPassword:[''],
  //   hear_about:[''],
    
  // })
  hear_about=["facebook ","twitter","google"]
  userModel:Client= new Client("","","","","");

  ngOnInit(): void {
  }
  saveData()
  {
    //send userModel object to backend
    console.log(this.userModel)
    this.clientService.postUser(this.userModel).subscribe(
      data=>{
        console.log("Success",data);
      },
      error=>{
        console.log("Error",error)
      }
    )
  }
}
