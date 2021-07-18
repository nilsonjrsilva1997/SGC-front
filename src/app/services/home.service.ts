import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url;
  private token;

  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:8080';
    this.token = localStorage.getItem('token');
  }

  getHome() : Observable<any> {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });

      console.log(localStorage.getItem('token'));
      return this.http.get<any>(`${this.url}/user-auth`, {headers: headers});
  }
}
