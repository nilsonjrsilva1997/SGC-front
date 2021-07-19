import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb:FormBuilder, private registerService:RegisterService, private viacep:ViacepService, private toastr: ToastrService, private router:Router) {
    
  }

  form = this.fb.group({
    name: ['', Validators.required],
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    cpfCnpj: ['', Validators.required],
    password: ['', Validators.required],
    addresses: this.fb.array([]),
    phones: this.fb.array([]),
  });

  ngOnInit(): void {

  }

  get addresses() {
    return this.form.controls["addresses"] as FormArray;
  }

  get phones() {
    return this.form.controls["phones"] as FormArray;
  }

  addAddress() {
    var addressForm = this.fb.group({
      zipCode: ['', Validators.required],
      road: ['', Validators.required],
      city: ['', Validators.required],
      complement: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      number: ['', Validators.required],
      isMain: ['', Validators.required],
    });

    this.addresses.push(addressForm);

    console.log(this.addresses);
  }

  addPhones() {
    const phoneForm = this.fb.group({
      number: ['', Validators.required],
    });

    this.phones.push(phoneForm);
    console.log(this.phones);
  }

  register() {
    if (!this.form.valid) {
      this.toastr.warning('Preencha todos os campos formulário', 'Atenção');
      return;
    }
    
    let body = (this.form.value);

    this.registerService.register(body).subscribe(response => {
      this.toastr.success('Registro efetuado com sucesso', 'Sucesso!');
      this.router.navigate(['login']);
    }, error => {
      this.toastr.error('Erro ao fazer registro', 'Erro');
    });
  }

  findAddress(index:number) {
    let zip = (this.form.controls['addresses'] as FormArray).at(index).value.zipCode

    this.viacep.findAddress(zip).subscribe(response => {      
      if(response.erro == true) {
        this.toastr.error('CEP não encontrado', 'Erro');
        return;
      }

      (this.form.controls['addresses'] as FormArray).at(index).patchValue({
        district: response.bairro,
        city: response.localidade,
        road: response.logradouro,
        state: response.uf
      });
    }, err => {
      this.toastr.error('CEP não encontrado', 'Erro');
    });
  }
  
  removePhone(phoneIndex:number) {
    (this.form.controls['phones'] as FormArray).removeAt(phoneIndex);
  }

  removeAddress(addressIndex:number) {
    (this.form.controls['addresses'] as FormArray).removeAt(addressIndex);
  }
}