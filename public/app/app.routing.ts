import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentComponent } from './recent.component';

const appRoutes: Routes = [
  
  {
    path: 'recent',
    component: RecentComponent
  },
  {
	  path:'',
	  redirectTo:'/recent',
	  pathMatch: 'full'
	  
  }

];


export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);







