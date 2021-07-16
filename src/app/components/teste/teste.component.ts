import { Component, OnInit } from '@angular/core';
import { TesteService } from 'src/app/services/teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  customers: Array<any> = new Array();

  constructor(private testeService: TesteService) { }

  ngOnInit(): void {
    this.listCustomer();
  }

  listCustomer() {
    this.testeService.listCustomer().subscribe(customers => {
        this.customers = customers;
    }, err => {
        console.log(err);
    })
  }
}
