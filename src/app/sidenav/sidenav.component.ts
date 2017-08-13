import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../state/app-state';
import { HeroService } from '../hero.service';
import API_KEY from '../../assets/apikey';
import { RELATED_HEROES } from '../reducers/heroes';

import MOCK_RELATED_HEROES from '../mockRelatedHeroes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {

  @Input() prop: number;
  @Output() closeSidenav = new EventEmitter();

  heroes$: Observable<any>;
  hero: any;
  mockRelatedHeroes: any;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.heroes$ = store.select<any>('heroes');

    this.heroes$.subscribe(hero => {
      if(hero["selectedHero"]) {
        if(hero["relatedHeroes"] === undefined) {
          console.log('related heroes is empty, selected:', hero["selectedHero"][0]["id"])
          this.relatedHeroes(hero["selectedHero"][0]["id"])
        } else {
          if(hero["selectedHero"][0]["id"] !== hero["relatedHeroes"]["heroe"]) {
            console.log('selectedHero', hero["selectedHero"][0]["id"])
            console.log('relatedHeroes', hero["relatedHeroes"]["heroe"])
            this.relatedHeroes(hero["selectedHero"][0]["id"])
          }
        }
      }

      this.hero = hero;
    });

    this.mockRelatedHeroes = MOCK_RELATED_HEROES;
  }

  ngOnChanges() {
  }

  private relatedHeroes(id: any) {
    // https://gateway.marvel.com:443/v1/public/characters/1011334/comics?apikey=bce9abaecf8d59d49b87e725f2161042
    this.heroService.fetchHeroes(`characters/${id}/comics?apikey=${API_KEY}&limit=50`)
    .then(heroes => {
      console.log('related heroes response', heroes)
      this.store.dispatch({ type: RELATED_HEROES, action: { heroe: id, heroes: heroes}})
    })
  }

}
