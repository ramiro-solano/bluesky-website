import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';



@NgModule({
    imports: [
    CommonModule,
    InicioRoutingModule,
    InicioPageComponent
]
})
export class InicioModule { }
