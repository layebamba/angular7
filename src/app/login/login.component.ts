import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }
  loginUser(){
console.log(this.loginUserData)
    this._auth.loginUrl(this.loginUserData)
    .subscribe(
        res=>{
     // console.log(res.headers.get('Authorization'))
        let jwt=res.body["token"]
        
        this._auth.saveToken(jwt)
       // this._auth.saveUsername(username);
  
        

       // this._auth.saveUsername(username),
       // localStorage.setItem('token',res.token)
       
        
       // this._router.navigate(['/partenaire'])

       
      },
      err => console.log(err)

    )

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

 

}
