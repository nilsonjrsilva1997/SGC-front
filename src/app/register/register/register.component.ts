import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb:FormBuilder, private registerService:RegisterService, private viacep:ViacepService, private toastr: ToastrService) {
    
  }

  form = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    addresses: this.fb.array([]),
    phones: this.fb.array([]),
  });

  ngOnInit(): void {

  }

  addField(event:any) {
    event.stopPropagation();
  }

  get addresses() {
    return this.form.controls["addresses"] as FormArray;
  }

  get phones() {
    return this.form.controls["phones"] as FormArray;
  }

  addAddress() {
    const addressForm = this.fb.group({
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
      console.log(response);
    }, error => {
      this.toastr.error('Erro ao fazer registro', 'Erro');
    });
  }

  findAddress(index:number, event:any) {
    let zip = (this.form.controls['addresses'] as FormArray).at(index).value.zipCode

    this.viacep.findAddress(zip).subscribe(response => {
      (this.form.controls['addresses'] as FormArray).at(index).patchValue({
        district: response.bairro,
        city: response.localidade,
        road: response.logradouro,
        state: response.uf
      });

    }, err => {

    });
  }
}
