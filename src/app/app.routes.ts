import { Routes } from '@angular/router';
import { AbaoutMePageComponent } from './aboutme/pages/abaout-me-page/abaout-me-page.component';


export const routes: Routes = [
  {
    path: 'about',
    component: AbaoutMePageComponent
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];
