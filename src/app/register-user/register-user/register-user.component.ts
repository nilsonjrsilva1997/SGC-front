import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private regService:RegisterUserService, private toastr:ToastrService, private navigator:Router) {
    
  }

  form = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  ngOnInit(): void {

  }

  register(event:any) {
    event.stopPropagation();

    if (!this.form.valid) {
      this.toastr.warning('Preencha todos os campos formulário', 'Atenção');
      return;
    }

    if(this.form.value.password != this.form.value.confirmPassword) {
      this.toastr.error('As senhas são diferentes', 'Erro');
      return;
    }

    this.regService.checkEmailExist(this.form.value.email).subscribe(response => {
        if(response == true) {
          this.toastr.error('E-mail já está em uso', 'Erro');
          return;
        }

        let user = this.form.value;
        this.regService.saveUser(user).subscribe(response => {
          this.toastr.success('Registro efetuado', 'Sucesso!');
          this.navigator.navigate(['login']);
        }, err => {
          this.toastr.error('Erro ao fazer registro', 'Erro');
          return;
        });
    }, err => {
      this.toastr.error('Erro ao fazer registro', 'Erro');
      return;
    })
  }

}
