import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any;

  constructor(private authService:AuthService) { 
     
  }

  ngOnInit(): void {
    this.login = {};
  }

  singin(frm:NgForm) {
    this.authService.signin(this.login).subscribe(response => {
      localStorage.setItem('token', response.access_token);

      console.log(localStorage.getItem('token'));
    }, err => {
      alert('Usuário ou senha incorretos');
    });
  }

}
