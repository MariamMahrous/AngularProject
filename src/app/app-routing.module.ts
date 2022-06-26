import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcompenComponent } from './editcompen/editcompen.component';
import { GetuserComponent } from './getuser/getuser.component';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';
import { OrderComponent } from './order/order.component';



const routes: Routes = [
   { path : "edit:/id", component:EditcompenComponent},
   {path : "about-us", component : ListcomponentComponent},
   { path: "get" ,component: GetuserComponent},
   { path:"order" , component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
