import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TesteService { 

  constructor(private http: HttpClient) { }
 
  listCustomer() : Observable<any> {
    const headers = new HttpHeaders().set('Accept','application/json');
    return this.http.get('http://localhost:8080/api/customers', { headers: headers });
  }
}