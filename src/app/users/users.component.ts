import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Iuser } from '../Shared-Classes-and types/Iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  userslist: Iuser[]=[];
  getErrorMsg: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllusers().subscribe( userData=>{
        this.userslist=userData;
        console.log(userData)
      },
      (error: any)=>{
        this.getErrorMsg=error;
      }
    )
  }

}
