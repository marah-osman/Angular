import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Ipost } from '../Shared-Classes-and types/Ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  PostList : Ipost[]=[];
  constructor(private http:HttpClient) { }

  Url:string="https://jsonplaceholder.typicode.com/posts"
  
  getAllposts():Observable<Ipost[]>
  {
   return this.http.get<Ipost[]>(this.Url).pipe(catchError((error: { message: any; })=>
   {
    return throwError(()=>error.message || "An error occured in the system please contact site adminstration")
   }));
  }
 
  getPostById(postID: number): Ipost | null{
    let foundProduct=this.PostList.find((postd)=>postd.id==postID);
      return foundProduct? foundProduct: null;
  }
  // getProductByID(pID: number): IProduct | null
  // {
  //     let foundProduct=this.ProductList.find((prd)=>prd.id==pID);
  //     return foundProduct? foundProduct: null;
  // }


  // postProduct(post:Ipost[])
  // {
  //  return this.http.post(this.postUrl,post).pipe(catchError((error: { message: any; })=>{
  //   return throwError(()=>error.message || "Internal server error")
  //  }));
  // }
}
