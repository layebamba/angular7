import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  depotUserData ={}

  constructor(private _Auth:AuthService) { }

  ngOnInit() {
  }
  Onsubmit(){
    console.log(this.depotUserData)
    this._Auth.depotUrl(this.depotUserData)

       .subscribe(
          res=>console.log(res),
          err=>console.log(err)
       )
  }

}
