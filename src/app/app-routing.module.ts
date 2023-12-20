import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  	{
    	path: '',
    	loadChildren: () => import('@components/home-page/home.routes').then(m => m.homePageRoutes)
  	}
];