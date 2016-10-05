import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentComponent } from './recent.component';
import { TopComponent } from './top.component';
import { OwnComponent } from './own.component';

const appRoutes: Routes = [
  
  {
    path: 'recent',
    component: RecentComponent
  },
  {
	path: 'top',
	component: TopComponent 
	  
  },
  {
	path: 'own',
	component: OwnComponent
	  
  },
  {
	  path:'', 
	  redirectTo:'/recent',
	  pathMatch: 'full'
	  
  }

];


export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);







