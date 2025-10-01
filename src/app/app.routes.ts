import { Routes } from '@angular/router';
import { AbaoutMePageComponent } from './aboutme/pages/abaout-me-page/abaout-me-page.component';

export const routes: Routes = [
  {
    path: '',
    component: AbaoutMePageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
