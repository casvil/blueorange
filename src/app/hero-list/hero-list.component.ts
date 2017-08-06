import { Component, OnInit } from '@angular/core';
// import MOCK_HEROES from '../mockHero';
import { HeroService } from '../hero.service';

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
    this.heroService.fetchHeroes('characters?apikey=bce9abaecf8d59d49b87e725f2161042&limit=50')
    .then(heroes => this.heroes = heroes)
  }

}
