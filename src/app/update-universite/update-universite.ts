import { Component,OnInit } from '@angular/core';
import {universite} from '../model/universite.model';
import { ActivatedRoute,Router } from '@angular/router';
import { UniversiteService} from '../services/universite.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  imports: [FormsModule, CommonModule],
  standalone:true,
  selector: 'app-update-universite',
  styles: ``,
  templateUrl: './update-universite.html',
})
export class UpdateUniversite implements OnInit {
 currentUniversite = new universite();
 message?:string;
  constructor(private activatedRoute: ActivatedRoute,private router:Router,private universiteService: UniversiteService) { }
  ngOnInit(): void {
     this.currentUniversite =this.universiteService.consulteruniversite(this.activatedRoute.snapshot.params['id']);
     console.log(this.currentUniversite); 
  }
  updateuniversite()
    { //console.log(this.currentProduit);
    this.universiteService.updateuniversite(this.currentUniversite);
     this.router.navigate(['universities']);
}
}
