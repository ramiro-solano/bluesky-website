import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    InicioPageComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
