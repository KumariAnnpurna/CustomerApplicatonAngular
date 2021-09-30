import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule} from '@angular/router';



import { FormsModule } from '@angular/forms'
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from '../Home/CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
    RouterModule.forRoot( MainRoutes )
    
    
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
