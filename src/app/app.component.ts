import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidenavComponent } from './sidenav/sidenav.component';
import Animations from './animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [Animations]
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
