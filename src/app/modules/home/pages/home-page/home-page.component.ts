import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../../../shared/components/nav-bar/nav-bar.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    standalone: true,
    imports: [NavBarComponent, RouterOutlet, FooterComponent]
})
export class HomePageComponent {

}
