import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page',
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.css'],
    standalone: true,

})
export class ServicesPageComponent implements OnInit{
  
    ngOnInit() {
        window.scrollTo(0, 0);
    }
}
