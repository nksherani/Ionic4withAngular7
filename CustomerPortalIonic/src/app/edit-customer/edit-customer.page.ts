import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {
  customerApi: Observable<any>;
  cust: any;
  customer:FormGroup;
  constructor(private route:ActivatedRoute, public httpClient: HttpClient) {

    

    var custId = this.route.snapshot.paramMap.get('id');

    this.customerApi = this.httpClient.get('http://localhost:52146/api/customers/'+custId);
      this.customerApi.subscribe(data=>{
        this.cust = data;
        console.log(data);
        this.customer = new FormGroup({
          CustomerName: new FormControl(this.cust.CustomerName, Validators.required),
          Address: new FormControl(this.cust.Address, Validators.required),
          Zip: new FormControl(this.cust.Zip, Validators.required),
          City: new FormControl(this.cust.City, Validators.required),
          Telephone: new FormControl(this.cust.Telephone, Validators.required),
          ContactFirst: new FormControl(this.cust.ContactFirst, Validators.required),
          ContactLast: new FormControl(this.cust.ContactLast, Validators.required),
       });
      });

      

   }

   onSubmit=()=>{
    var cust = {
      CustomerId: this.route.snapshot.paramMap.get('id'),
      CustomerName: this.customer.controls.CustomerName.value,
      Address: this.customer.controls.Address.value,
      Zip: this.customer.controls.Zip.value,
      City: this.customer.controls.City.value,
      Telephone: this.customer.controls.Telephone.value,
      ContactFirst: this.customer.controls.ContactFirst.value,
      ContactLast: this.customer.controls.ContactLast.value,
      CreatedDate:null,
      UpdatedDate:null
    }
    console.log(cust);
    
    this.httpClient.post('http://localhost:52146/api/Customers/PostCustomer', cust).subscribe((response) => {
      console.log(response);
      window.location.href='/';
  });

  }

  ngOnInit() {
  }

}
