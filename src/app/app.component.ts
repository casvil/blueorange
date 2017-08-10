import { Component, OnInit, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  title = `BlueOrange's Application`;
  sidenavState: string = 'out';

  toggleSidenav() {
    this.sidenavState = this.sidenavState === 'out' ? 'in' : 'in';
  }

  closeSidenav() {
    this.sidenavState = this.sidenavState === 'out' ? 'in' : 'out';
  }
}
