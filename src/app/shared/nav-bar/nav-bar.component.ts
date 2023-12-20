import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeButtonComponent } from '@shared/ui-components/dark-mode-button/dark-mode-button.component';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive, DarkModeButtonComponent]
})

export class NavBarComponent implements OnInit{

    menuNavBar: Array<any> = [];
    MenuResponsiveActive: boolean = false;

    //Menu Responsive
    btnMenu(): void { 
        const menu = document.querySelector('.menu-responsive');
        this.MenuResponsiveActive? menu?.classList.remove('active') : menu?.classList.add('active');
        this.MenuResponsiveActive = !this.MenuResponsiveActive;
    }

    

    ngOnInit(): void{
        this.menuNavBar = [
            {
                title: 'Inicio',
                router: ['/', 'inicio'],
                label: 'Página de inicio',
                index: 1,
            },
            {
                title: 'Servicios',
                router: ['/', 'servicios'],
                label: 'Página de servicios',
                index: 2,
            },
            {
                title: 'Nosotros',
                router: ['/', 'nosotros'],
                label: 'Página sobre nosotros',
                index: 3,
            },
        ];
    };
}
