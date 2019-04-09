import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    customers: Observable<any>;
    custList = [];
    constructor(public httpClient: HttpClient){
      this.customers = this.httpClient.get('http://localhost:52146/api/customers');
      this.customers.subscribe(data=>{
        this.custList = data;
        console.log(data);
        
      })
    }

    tempvar = "demo variable";

    updateTemp=()=>{
      this.tempvar = "changed demo var";
    }
}
