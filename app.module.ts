import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { SlideComponent } from './slide/slide.component';
import { EmptyarrComponent } from './emptyarr.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IdcardComponent } from './idcard/idcard.component';
import  {StateComponent} from './state/state.component';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    CheckoutformComponent,
    SlideComponent,
    EmptyarrComponent,
    RegistrationformComponent,
    IdcardComponent,
    StateComponent,
    TableComponent,
    Filtertable3Component,
    HomeComponent,  
    ServiceComponent,
    AboutusComponent,
    ContactusComponent,
    RoutingComponent,
    TopnavbarComponent,
    CompanylogoComponent,
    TodolistComponent,
    SignupComponent,
    LoginComponent,
    AddingComponent,
    MovielistComponent,
    

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
