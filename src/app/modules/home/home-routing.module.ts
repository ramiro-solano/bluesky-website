import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from '@modules/inicio/pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('@modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('@modules/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('@modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
