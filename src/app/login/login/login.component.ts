import { Component, ElementRef, Input, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {NgbAlert, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('messageBox') messageBox:ElementRef;

  login:any;

  constructor(private authService:AuthService, alertConfig: NgbAlertConfig, private renderer2: Renderer2, private toastr:ToastrService) { 
    this.messageBox = new ElementRef('');
  }

  ngOnInit(): void {
    this.login = {};
  }

  singin(frm:NgForm) {
    this.authService.signin(this.login).subscribe(response => {
      localStorage.setItem('token', response.access_token);
      this.toastr.success('Vamos lá!', 'Bem Vindo');
    }, err => {
      this.toastr.error('Login ou senha incorretos', 'Erro');
    });
  }

}
