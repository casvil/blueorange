import { Component, OnInit, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../hero.service';
import API_KEY from '../../assets/apikey';
// import MOCK_HEROES from '../mockHero';
import { AppState } from '../state/app-state';
import { GET_HEROES, ADD_HEROES } from '../reducers/heroes';
import { ScrollEvent } from 'ngx-scroll-event';
import _ from 'underscore';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<any>;
  heroes: any;
  throttledScroll: any;
  heroCounter: number;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.heroes$ = store.select<any>('heroes');

    this.heroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  ngOnInit() {
    // fetch initial heroes request and dispatch them into the state
    this.heroService.fetchHeroes(`characters?apikey=${API_KEY}&limit=50`)
    .then(heroes => this.store.dispatch({ type: GET_HEROES, action: heroes}))
    .then(() => this.heroCounter = this.heroes.length);

    this.throttledScroll = _.throttle(this.addHeroes, 5000);
  }

  private handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      this.throttledScroll();
    }
  }

  private addHeroes() {
    this.heroService.fetchHeroes(`characters?apikey=${API_KEY}&offset=${this.heroCounter + 50}&limit=50`)
    .then(heroes => this.store.dispatch({ type: ADD_HEROES, action: heroes}))
    .then(heroes => this.heroCounter += this.heroes.length);
  }

}
