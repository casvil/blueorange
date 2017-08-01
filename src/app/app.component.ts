import { Component } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';

@Component({
  selector: 'app-root',
  template: `
  <div>
  <h1>{{title}}</h1>
  <h2>Marvel Heroes</h2>
  <hero-list></hero-list>
  `,
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = `BlueOrange's Application`;
  }
