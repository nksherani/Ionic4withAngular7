import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {
  public customer:FormGroup;
  constructor(private http: HttpClient) { 
    this.customer = new FormGroup({
      CustomerName: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      Zip: new FormControl('', Validators.required),
      City: new FormControl('', Validators.required),
      Telephone: new FormControl('', Validators.required),
      ContactFirst: new FormControl('', Validators.required),
      ContactLast: new FormControl('', Validators.required),
   });
  }

  onSubmit=()=>{
    var cust = {
      CustomerId: 0,
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
    
    this.http.post('http://localhost:52146/api/Customers/PostCustomer', cust).subscribe((response) => {
      console.log(response);
      window.location.href='/';
  });

  }

  ngOnInit() {
  }

}
