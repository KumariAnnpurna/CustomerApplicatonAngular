import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model'

@Component({
  templateUrl: './CustomerApp.view.html',
  styleUrls: ['./CustomerApp.component.css']
})
export  class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel : Customer = new Customer();
  CustomerModels :Array<Customer> = new Array<Customer>();
  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();// clear UI
  }
  
  hasError(typeofvalidator:string,
        controlname:string) : boolean{
          return this.CustomerModel
                .formCustomerGroup
                .controls[controlname]
                .hasError(typeofvalidator);
  }
}

