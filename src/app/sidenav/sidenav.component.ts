import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../state/app-state';
import { HeroService } from '../hero.service';
import API_KEY from '../../assets/apikey';
import { RELATED_HEROES } from '../reducers/heroes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {

  @Output() closeSidenav = new EventEmitter();

  heroes$: Observable<any>;
  hero: any;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.heroes$ = store.select<any>('heroes');

    this.heroes$.subscribe(hero => {
      if(hero["selectedHero"]) {
        if(hero["relatedHeroes"] === undefined) {
          this.relatedHeroes(hero["selectedHero"][0]["id"])
        } else {
          if(hero["selectedHero"][0]["id"] !== hero["relatedHeroes"]["heroe"]) {
            this.relatedHeroes(hero["selectedHero"][0]["id"])
          }
        }
      }
      this.hero = hero;
    });
  }

  ngOnChanges() {
  }

  private relatedHeroes(id: any) {
    this.heroService.fetchHeroes(`characters/${id}/comics?apikey=${API_KEY}&limit=1`)
    .then(heroes => {
      if(heroes.length > 0) {
        this.store.dispatch({ type: RELATED_HEROES, action: { heroe: id, results: true, heroes: heroes[0]["characters"]["items"].slice(0,5) } })
      } else {
        this.store.dispatch({ type: RELATED_HEROES, action: { heroe: id, results: false, heroes: [] } })
      }
    });
  }

}
