import { Component, OnInit } from '@angular/core';
import { Partenaire } from './partenaire';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
partenaire:Partenaire[]
  constructor(private partService:PartenaireService) { }

  ngOnInit() {
    this.getPart();
  }
  getPart(){
    this.partService.getPartenaires()
   
      .subscribe(res => {
        this.partenaire = res
      
 
     // console.log(this.partenaire)
      },
      err=> {console.log(err)})
    
  }

}
