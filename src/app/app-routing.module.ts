import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartenaireComponent } from './partenaire/partenaire.component';

import { LoginComponent } from './login/login.component';
import { CompteComponent } from './compte/compte.component';


import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { DepotComponent } from './depot/depot.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [

  {
    path:'partenaire',
    canActivate: [AuthGuard],
    
    component:PartenaireComponent
  },
 
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent
  },

  {
    path:'compte',
    component:CompteComponent
  },

  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'depot',
    component:DepotComponent
  },
  {
    path:'transaction',
    component:TransactionComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
