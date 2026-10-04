import { Injectable } from '@angular/core';
import { universite } from '../model/universite.model';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  universities: universite[];
  universite!: universite;

  constructor() {
    this.universities = [
         { iduniversite: 1, nomuniversite: "Université de Tunis El Manar", villeuniversite: "Tunis", nombre_etudiants: 45000, dateCreation: new Date("01/01/2000") },
         { iduniversite: 2, nomuniversite: "Université de Sousse", villeuniversite: "Sousse", nombre_etudiants: 30000, dateCreation: new Date("03/15/2004") },
         { iduniversite: 3, nomuniversite: "Université de Sfax", villeuniversite: "Sfax", nombre_etudiants: 38000, dateCreation: new Date("1986-09-20") },
        { iduniversite: 4, nomuniversite: "Iset nabeul", villeuniversite: "nabeul", nombre_etudiants: 3000, dateCreation: new Date("1995,09,01") }
    ];
  }

  listeUniversities(): universite[] {
    return this.universities;
  }

  ajouterUniversite(univers: universite) {
    this.universities.push(univers);
  }
  supprimerUniversite(univ: universite) {
    const index = this.universities.indexOf(univ, 0);
    if (index > -1) {
      this.universities.splice(index, 1);
    }
  }
 consulteruniversite(id:number):universite
 {
  this.universite = this.universities.find(p => p.iduniversite == id)!;
return this.universite;}
updateuniversite( univers:universite){
  //chercher le produit prod du tableau produits
    const index = this.universities.indexOf(univers, 0);
     if (index > -1) {
    this.universities.splice(index, 1); //supprimer l'ancien éléments
     this.universities.splice(index, 0, univers); // insérer le nouvel élément
  }


}}
