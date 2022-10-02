import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginFrm!: FormGroup;
  constructor( private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginFrm = this.fb.group({
      Email: ['', [Validators.required, Validators.email, Validators.minLength(7)]]
      , Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    alert("In Login")
    this.userService.login('taken');
  }
}
