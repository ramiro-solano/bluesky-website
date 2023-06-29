import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  menuNavBar: Array<any> = [];
  iconButtons: Array<any> = ['uil-bars','uil-multiply'];
  menuButton: boolean = false;
  icon = this.iconButtons[0]

  //Menu Responsive
  btnNavbar(): void {
    const menu = document.querySelector('.menu-responsive');
    this.menuButton === false? 
    (this.menuButton = true, menu?.classList.add('active'), this.icon = this.iconButtons[1]) :
    (this.menuButton = false, menu?.classList.remove('active'),this.icon = this.iconButtons[0])
  }

  //Dark mode button
  isDarkMode: boolean = false;
  toggleDarkMode(): void {
    const page = document.querySelector('html');
    
    this.isDarkMode === false? (this.isDarkMode = !this.isDarkMode, page?.classList.add('dark')):
    (this.isDarkMode = !this.isDarkMode, page?.classList.remove('dark'));

    // Guarda en modo en localstorage
    if (page?.classList.contains('dark')) {
      localStorage.setItem('dark-mode', 'true');
      // localStorage.setItem('dark-mode-btn', 'true');
    }
    else {
      localStorage.setItem('dark-mode', 'false');
      // localStorage.setItem('dark-mode-btn', 'false');
    }
  }
  
  constructor() {}

  ngOnInit(): void{
    this.menuNavBar = [
      {
        title: 'Inicio',
        router: ['/', 'inicio']
      },
      {
        title: 'Servicios',
        router: ['/', 'servicios']
      },
      {
        title: 'Nosotros',
        router: ['/', 'nosotros']
      },
    ];
    const page = document.querySelector('html')
    if (localStorage.getItem('dark-mode') === 'true') {
      page?.classList.add('dark');
      this.isDarkMode = true;
    }
    else{
      page?.classList.remove('dark');
      this.isDarkMode = false;
    };
  }
}
