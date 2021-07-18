import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public addresses:any;

  constructor(private serviceAddress:AddressService) { }

  ngOnInit(): void {
    this.serviceAddress.getAddresses().subscribe(response => {
      this.addresses = response.addresses;
    }, err => {

    })
  }

}
