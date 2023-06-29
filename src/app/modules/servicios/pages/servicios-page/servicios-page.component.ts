import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-page',
  templateUrl: './servicios-page.component.html',
  styleUrls: ['./servicios-page.component.css']
})
export class ServiciosPageComponent implements OnInit{
  
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
