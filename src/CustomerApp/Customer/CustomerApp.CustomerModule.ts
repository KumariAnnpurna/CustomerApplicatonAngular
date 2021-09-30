import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { CustomerComponent } from './CustomerApp.component';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
@NgModule({
  declarations: [
     CustomerComponent
  ],
  imports: [
   CommonModule,
    FormsModule,//simple bracket []or {}or ngmodule
    ReactiveFormsModule,//validation,formcontrol,form group
    RouterModule.forChild( CustomerRoutes )
   
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
