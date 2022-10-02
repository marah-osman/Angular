import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Ipost } from '../Shared-Classes-and types/Ipost';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) {  }
    
    url:string="https://jsonplaceholder.typicode.com/comments";

    
 
  getAllposts():Observable<Ipost[]>
  {
   return this.http.get<Ipost[]>(this.url).pipe(catchError((error: { message: any; })=>
   {
    return throwError(()=>error.message || "An error occured in the system please contact site adminstration")
   }));
  }
  getPosttById(pID: number): Observable <Ipost>{
    return this.http.get<Ipost>(`${this.url}/getproduct/${pID}`);
  }
}
