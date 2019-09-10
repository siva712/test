import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { EmptyarrComponent } from './emptyarr.component';
import { SlideComponent } from './slide/slide.component';
import { IdcardComponent } from './idcard/idcard.component';
import{ StateComponent } from './state/state.component';
import { TableComponent } from './table/table.component';
import { Filtertable3Component } from './filtertable3/filtertable3.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { CompanylogoComponent } from './companylogo/companylogo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddingComponent } from './adding/adding.component';
import { MovielistComponent } from './movielist/movielist.component';




const routes: Routes = [
  //  {path:'Emptyarr',component:EmptyarrComponent},
  //  {path:'registrationform',component:RegistrationformComponent},
  // {path:'checkoutform',component:CheckoutformComponent},
  //  {path:'slide',component:SlideComponent},
  //  {path:'idcard',component:IdcardComponent},
  // {path:'statecomponent',component:StateComponent},
  //  {path:'table',component:TableComponent},
  //  {path:'filtertable3',component:Filtertable3Component},
  //  {path:'home',component:HomeComponent},
  //  {path:'service',component:ServiceComponent},
  //  {path:'about',component:AboutusComponent},
  //  {path:'contact',component:ContactusComponent},
  //  {path:'topnavbar',component:TopnavbarComponent},
  //  {path:'companylogo',component:CompanylogoComponent},
  //  {path:'todolist ',component:TodolistComponent},
  // {path:'exdirective',component:ExdirectiveComponent},
   {path:'saveGroup',component:AddingComponent},

       {path:'signup',component:SignupComponent},
        {path:'login',component:LoginComponent},
       {path:'movielist',component:MovielistComponent}
      
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { } export const
RoutingComponent = [HomeComponent ,ServiceComponent,AboutusComponent,ContactusComponent]