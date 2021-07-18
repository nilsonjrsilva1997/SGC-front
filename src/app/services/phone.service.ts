import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private url;
  private token;

  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:8080';
    this.token = localStorage.getItem('token');
  }

  getPhones():Observable<any> {
    let headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`});
    return this.http.get(`${this.url}/user-auth`, {headers: headers});
  }
}
