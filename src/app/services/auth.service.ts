import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  signin(login:any) : Observable<any> {
    let header = new HttpHeaders();
  
    header = header
      .set('Content-Type','application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa('client:123'))
      .set('Accept','application/json');

      console.log(header);

      let body = new URLSearchParams();
      body.set('username', login.username);
      body.set('password', login.password);
      body.set('grant_type', 'password');

      return this.http.post<any>(this.url  +'oauth/token', body, {headers: header})
  }
}
