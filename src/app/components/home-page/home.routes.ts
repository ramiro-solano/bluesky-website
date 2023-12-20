import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

export const homePageRoutes: Routes = [
    {
        path: 'inicio',
        component: HomePageComponent
    },
    {
        path: 'servicios',
        loadChildren: () => import('@components/services-page/services.routes').then(m => m.servicesRoutes)
    },
    {
        path: 'nosotros',
        loadChildren: () => import('@components/about-us-page/about-us.routes').then(m => m.aboutUsRutes)
    },
    {
        path: '**',
        redirectTo: 'inicio'
    },
];