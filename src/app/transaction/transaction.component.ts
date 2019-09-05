import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormControl }  from '@angular/forms';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
 
 transactionUserData={}

  constructor( private _Auth: AuthService) { }

  ngOnInit() {
  }
  ataya= new FormGroup({
    nomexp: new FormControl('',Validators.required),
    prenomexp: new FormControl('',Validators.required),
    telexp: new FormControl('',Validators.required),
    nomrecep: new FormControl('',Validators.required),
    prenomrecep: new FormControl('',Validators.required),
    telrecep: new FormControl('',Validators.required),
    mtntenvoi: new FormControl('',[Validators.required,Validators.min(500)]),
  });
  Onsubmitataya(){}
  Ok(){
   console.log(this.ataya.value)
      this._Auth.Ok(this.ataya.value)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

}
