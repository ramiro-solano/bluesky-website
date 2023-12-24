import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  templateUrl: './about-us-page.component.html',
})
export class AboutUsPageComponent {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}