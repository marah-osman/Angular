import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../Custom Validations/confirmPassword.validators';


@Component({
  selector: 'app-reativeregester',
  templateUrl: './reativeregester.component.html',
  styleUrls: ['./reativeregester.component.sass']
})
export class ReativeregesterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registerationForm=this.fb.group({
    userName:['',Validators.required],
    password:[''],
    confirmPassword:[''],
    email:['',Validators.required],
  }, {validator:[ConfirmPasswordValidator]})
   

  get email()
  {
    return this.registerationForm.get('email')
  }
  // get password(){
  //   return this.registerationForm.get('password')
  // }
  // get confirmPasswordl()
  // {
  //   return this.registerationForm.get('confirmPassword')
  // }
  ngOnInit(): void {
  }

}
