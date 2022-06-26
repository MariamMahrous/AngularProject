import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';



import { HttpClientModule } from
'@angular/common/http';
import { FormsModule  ,ReactiveFormsModule} from '@angular/forms';
import { EditcompenComponent } from './editcompen/editcompen.component';
import { NavComponent } from './nav/nav.component';
import { OrderComponent } from './order/order.component';
import { BlockproductComponent } from './blockproduct/blockproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    ListcomponentComponent,
  
    
    EditcompenComponent,
    NavComponent,
    OrderComponent,
    BlockproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
     ReactiveFormsModule
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
