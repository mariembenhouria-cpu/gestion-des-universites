import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { universite } from '../model/universite.model';
import { UniversiteService } from '../services/universite.service';
import { RouterLink } from '@angular/router';
@Component({
  imports: [CommonModule,RouterLink],
  selector: 'app-universities',
  templateUrl: './universities.html'
})
export class Universities implements OnInit{
   universities? : universite[]; //un tableau de chînes de caractères
   constructor(private universiteservice:UniversiteService) {
     this.universities=universiteservice.listeUniversities();
}
  ngOnInit(): void {
    
  }
  supprimeruniversite(universite:universite)
{
//console.log(universite);
let conf = confirm("Etes-vous sûr ?");
if (conf)
{
this.universiteservice.supprimerUniversite(universite);}
}

      
}
