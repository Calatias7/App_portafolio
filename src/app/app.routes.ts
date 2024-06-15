import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/perfil', pathMatch: 'full' }
  
];
