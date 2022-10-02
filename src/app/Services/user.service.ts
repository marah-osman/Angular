import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { Iuser } from '../Shared-Classes-and types/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {  }
    
    url:string="https://jsonplaceholder.typicode.com/users";

    postUrl:string="https://jsonplaceholder.typicode.com/posts"
 
  getAllusers():Observable<Iuser[]>
  {
   return this.http.get<Iuser[]>(this.url).pipe(catchError((error: { message: any; })=>
   {
    return throwError(()=>error.message || "An error occured in the system please contact site adminstration")
   }));
  }
  login(Token: string){
    alert (Token);
    localStorage.setItem('email', Token);
  }

  logout(){
    localStorage.removeItem('UserToken');
  }

  isLogged(): boolean {
    if (localStorage.getItem('UserToken')) {
      return true ;
    }
    else {
      return false;
    }
  }
}
