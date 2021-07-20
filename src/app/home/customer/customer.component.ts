import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public customers:any;
  public customerIndex:any;

  constructor(private customer:CustomerService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.customer.list().subscribe(response => {
      if(response.customer === null) {
        this.toastr.info('Nenhum Cliente encontrado', '');
        return;
      }

      console.log(response.customer);

      this.customers = response.customer;
    }, err => {
      this.toastr.error('Erro ao buscar clientes', 'Erro');
    })
  }

  show(id:number) {

  }
}
