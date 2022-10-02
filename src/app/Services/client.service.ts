import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  _url:string="http://localhost:3000/save";
  constructor(private http:HttpClient) { }

  postUser(client:Client)
  {
    return this.http.post(this._url,client);
  }
}

