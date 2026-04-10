import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServiceDetailComponent } from './service-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service/:id', component: ServiceDetailComponent },
  { path: '**', redirectTo: '' }
];
