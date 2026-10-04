import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { universite } from '../model/universite.model';
import { UniversiteService } from '../services/universite.service';
@Component({
  imports: [FormsModule],
  selector: 'app-add-university',
  templateUrl: './add-university.html',
})
export class AddUniversity implements OnInit {
  newuniversite=new universite();
  message?:string;
 constructor(private universiteservice:UniversiteService){}
 ngOnInit(): void {
   
 }
addUniversity(){
//console.log(this.newuniversite);
this.universiteservice.ajouterUniversite(this.newuniversite);
this.message = "Université ajouté avec succès";
}
}
