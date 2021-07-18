import { Component, OnInit } from '@angular/core';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  public phones:any;

  constructor(private phoneService:PhoneService) { }

  ngOnInit(): void {
    this.phoneService.getPhones().subscribe(response => {
      this.phones = response.phones;
    }, err => {

    });
  }

}
