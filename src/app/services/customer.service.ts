import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  protected url;
  protected header:HttpHeaders;

  constructor(private http:HttpClient) {
    this.url = 'http://localhost:8080/';
    this.header = new HttpHeaders();
    this.header = this.header.set('Accept','application/json')
    .set('Authorization','Bearer ' + localStorage.getItem('token'));
  }

  customer(register:any) : Observable<any>  {
    return this.http.post<any>(this.url  +'customer/create', register, {headers: this.header});
  }

  list():Observable<any> {
    return this.http.get(this.url + 'user-auth/', {headers:this.header});
  }

  show(id:number):Observable<any> {
    return this.http.get(this.url + 'customer/' + id, {headers:this.header});
  }
}
