import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../state/app-state';
import { HeroService } from '../hero.service';
import API_KEY from '../../assets/apikey';
import { SEARCH_HEROES } from '../reducers/heroes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  heroes$: Observable<any>;
  heroes: any;

  constructor(private heroService: HeroService, private store: Store<AppState>) {
    this.heroes$ = store.select<any>('heroes');

    this.heroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  ngOnInit() {}

  onKey(event: any) {
    this.searchHeroes(event.target.value)
  }

  private searchHeroes(searchValue: string) {
    if(searchValue === "") {
      return setTimeout(() => this.store.dispatch({ type: SEARCH_HEROES, action: []}), 500)
    }

    this.heroService.fetchHeroes(`characters?apikey=${API_KEY}&nameStartsWith=${searchValue}&limit=50`)
    .then(heroes => this.store.dispatch({ type: SEARCH_HEROES, action: heroes}))
  }
}
