import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { PartenaireComponent } from './partenaire/partenaire.component';

import { PartenaireService } from './partenaire.service';

import { AuthGuard } from './auth.guard';
import { CompteComponent } from './compte/compte.component';

import { UserComponent } from './user/user.component';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';



@NgModule({
  declarations: [
    AppComponent,
 
    LoginComponent,
    PartenaireComponent,
    CompteComponent,
  
    UserComponent,
  
    RegisterComponent,
  
    DepotComponent,
  
    TransactionComponent,
    
 
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,PartenaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
