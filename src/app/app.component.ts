import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngprog';

  constructor(private _auth: AuthService){}

  ngOnInit():void {
    this._auth.loadToken()
  
  }

  isSuper_admin()
  {
    return this._auth.isSuper_admin();
  }
  isPartenaire()
  {
    return this._auth.isPartenaire();
  }
  isAdmin()
  {
    return this._auth.isAdmin();
  }
  
  isCaissier()
  {
    return this._auth.isCaissier();
  }
  isUser()
  {
    return this._auth.isUser();
  }
  isAuthenticated(){
    return this._auth.isAuthenticated();

  }

  logOut(){
    this._auth.logout();
  }

 

 
}
