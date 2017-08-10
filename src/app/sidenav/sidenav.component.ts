import { Component, OnInit, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../state/app-state';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  hero$: Observable<any>;
  hero: any;

  constructor(private store: Store<AppState>) {
    this.hero$ = store.select<any>('heroes');

    this.hero$.subscribe(hero => {
      this.hero = hero;
    });
  }

  ngOnInit() {
  }

  // handleSidenav() {
  //   console.log('close sidenav')
  //   this.closeSidenav.emit();
  // }

}
