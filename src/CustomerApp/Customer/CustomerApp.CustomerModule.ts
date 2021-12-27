import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { CustomerComponent } from './CustomerApp.component';
import {GridComponent} from '../Utility/CustomerApp.GridComponent'
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
@NgModule({
  declarations: [
     CustomerComponent,GridComponent
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
