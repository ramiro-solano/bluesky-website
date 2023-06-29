import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros-page',
  templateUrl: './nosotros-page.component.html',
  styleUrls: ['./nosotros-page.component.css']
})
export class NosotrosPageComponent implements OnInit{
  
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
