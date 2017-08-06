import { Injectable } from '@angular/core';
import { Hero, HEROES } from './hero';

@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
