import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes = HEROES;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

}
