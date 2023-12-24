import { Component, OnInit } from '@angular/core';

@Component({
  	selector: 'app-dark-mode-button',
  	standalone: true,
  	template: `
		<!-- Button dark mode -->
        <button (click)="toggleDarkMode()" type="button" aria-label="Modo oscuro y modo luz clara" class="flex justify-center items-center [&>svg]:fill-gray-500 [&>svg]:dark:fill-slate-300 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:transition-custom">
            @if (!isDarkMode) {
                <!-- Light mode icon -->
                <svg aria-label="Activar de modo oscuro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                </svg>          
            } @else {
                <!-- Dark mode icon -->
                <svg aria-label="Activar de modo luz clara" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
                </svg>          
            }
        </button>
    `,
})

export class DarkModeButtonComponent implements OnInit{

	isDarkMode: boolean = false;
	html = document.querySelector('html');

	//Dark mode button
    toggleDarkMode(): void {
        const page = this.html;
    
        this.isDarkMode === false? 
            page!.classList.add('dark') : 
            page!.classList.remove('dark')
        ;
        this.isDarkMode = !this.isDarkMode;

        // Save mode to localstorage
        page!.classList.contains('dark')? 
            localStorage.setItem('dark-mode', 'true') : 
            localStorage.setItem('dark-mode', 'false')
        ;
    }

	ngOnInit(): void {
		// Check if save dark mode
        localStorage.getItem('dark-mode') === 'true'?
            ( this.isDarkMode = !this.isDarkMode, this.html!.classList.add('dark') ) :
            this.html!.classList.remove('dark')
        ;
	}
}
