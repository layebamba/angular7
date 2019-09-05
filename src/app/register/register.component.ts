import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imageUrl: string ="/assets/image/default-avatar.png"
 fileToUpload: File=null;
utilOnSubmitData={}
  constructor(private _auth: AuthService ) { }

  ngOnInit() {
  }


handleFileInput(file: FileList)
{
  this.fileToUpload = file.item(0);
  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload)
}

data=new FormGroup({
  nomAgence: new FormControl('',Validators.required),
  lieu: new FormControl('',Validators.required),
  phone: new FormControl('',Validators.required),
  isactive: new FormControl('',Validators.required),
  username: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
  nom: new FormControl('',Validators.required),
  prenom: new FormControl('',Validators.required),
  adresse: new FormControl('',Validators.required),
  telephone: new FormControl('',Validators.required),
  status: new FormControl('',Validators.required),
  profil: new FormControl('',Validators.required),





});

Onsubmitdata(){}


OnSubmit(){
  console.log(this.data.value,this.fileToUpload)
  this._auth.postFile(this.data.value,this.fileToUpload)
  .subscribe(
    res =>{
      console.log(res)
      
      
      this.imageUrl = "/assets/image/default-image.png";
    },
    err=>{
      console.log(err)
    }
  );
 }

}

