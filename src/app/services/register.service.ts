import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  protected url;

  constructor(private http:HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  register(register:any) : Observable<any>  {
    let header = new HttpHeaders();

    header = header.set('Accept','application/json');

    return this.http.post<any>(this.url  +'user/register/', register, {headers: header});
  }
}
