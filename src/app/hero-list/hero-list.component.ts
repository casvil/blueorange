import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../hero.service';
import API_KEY from '../../assets/apikey';
// import MOCK_HEROES from '../mockHero';
import { AppState } from '../state/app-state';
import { GET_HEROES, ADD_HEROES } from '../reducers/heroes';



@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  // heroes = MOCK_HEROES;
  heroes: Observable<any>;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.heroes = store.select<any>('heroes');
  }

  ngOnInit() {
    this.heroService.fetchHeroes(`characters?apikey=${API_KEY}&limit=50`)
    // .then(heroes => this.heroes = heroes)
    .then(heroes => this.store.dispatch({ type: GET_HEROES, action: heroes}))
  }

}
