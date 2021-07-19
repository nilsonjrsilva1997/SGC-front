import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  
  private url:string;

  constructor(private http:HttpClient) { 
    this.url = 'http://localhost:8080/';
  }

  saveUser(user:any) : Observable<any> {
    return this.http.post(this.url + 'user/register/', user);
  }

  checkEmailExist(email:string) : Observable<any> {
    return this.http.get(this.url + 'user/register/check-email-exists/' + email);
  }
}
