import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user:User[]
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUse()
  }
  getUse()
  {
    
    this.userService.getUsers()
    .subscribe(
res=>{
  this.user=res
  console.log(this.user)
},
err=>{
  console.log(err)
}
    )
                                                                                                                                                                                                                                                        
    
  }
                                                                                                                                                                                                                                                                                                                                                                               
}
