import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../state/app-state';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  hero$: Observable<any>;
  hero: any;

  constructor(private store: Store<AppState>) {
    this.hero$ = store.select<any>('heroes');

    this.hero$.subscribe(hero => {
      // console.log('emitted ', hero)
      this.hero = hero;
    });
  }

  ngOnInit() {
  }

}
