import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../state/app-state';
import MOCK_RELATED_HEROES from '../mockRelatedHeroes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  hero$: Observable<any>;
  hero: any;
  mockRelatedHeroes: any;

  constructor(private store: Store<AppState>) {
    this.hero$ = store.select<any>('heroes');

    this.mockRelatedHeroes = MOCK_RELATED_HEROES;

    this.hero$.subscribe(hero => {
      this.hero = hero;
    });
  }

  ngOnInit() {
  }

}
