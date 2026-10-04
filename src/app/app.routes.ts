import { Routes } from '@angular/router';
import { Universities } from './universities/universities';
import { AddUniversity } from './add-university/add-university';
import { UpdateUniversite } from './update-universite/update-universite';
export const routes: Routes = [
    {path: "universities", component :Universities },
    {path: "adduniversity", component :AddUniversity},
    {path: "updateuniversite/:id", component: UpdateUniversite },
    {path: "", redirectTo: "universities", pathMatch: "full"}

];
