import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import API_KEY from '../../assets/apikey';
// import MOCK_HEROES from '../mockHero';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {

  // heroes = MOCK_HEROES;
  heroes: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.fetchHeroes(`characters?apikey=${API_KEY}&limit=50`)
    .then(heroes => this.heroes = heroes)
  }

}
