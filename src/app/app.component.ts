import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
}

const HEROES: Hero[] = [
  
  {
    "id": 1011334,
    "name": "3-D Man",
    "description": "",
    "modified": "2014-04-29T14:18:17-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
  },
  {
    "id": 1017100,
    "name": "A-Bomb (HAS)",
    "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    "modified": "2013-09-18T15:54:04-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
  },
  {
    "id": 1009144,
    "name": "A.I.M.",
    "description": "AIM is a terrorist organization bent on destroying the world.",
    "modified": "2013-10-17T14:41:30-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
  },
  {
    "id": 1010699,
    "name": "Aaron Stack",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010699",
  },
  {
    "id": 1009146,
    "name": "Abomination (Emil Blonsky)",
    "description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
    "modified": "2012-03-20T12:32:12-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009146",
  },
  {
    "id": 1016823,
    "name": "Abomination (Ultimate)",
    "description": "",
    "modified": "2012-07-10T19:11:52-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016823",
  },
  {
    "id": 1009148,
    "name": "Absorbing Man",
    "description": "",
    "modified": "2013-10-24T14:32:08-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009148",
  },
  {
    "id": 1009149,
    "name": "Abyss",
    "description": "",
    "modified": "2014-04-29T14:10:43-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009149",
  },
  {
    "id": 1010903,
    "name": "Abyss (Age of Apocalypse)",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010903",
  },
  {
    "id": 1011266,
    "name": "Adam Destine",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011266",
  },
  {
    "id": 1010354,
    "name": "Adam Warlock",
    "description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
    "modified": "2013-08-07T13:49:06-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010354",
  },
  {
    "id": 1010846,
    "name": "Aegis (Trey Rollins)",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
      "extension": "gif"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010846",
  },
  {
    "id": 1011297,
    "name": "Agent Brand",
    "description": "",
    "modified": "2013-10-24T13:09:30-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011297",
  },
  {
    "id": 1011031,
    "name": "Agent X (Nijo)",
    "description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011031",
  },
  {
    "id": 1009150,
    "name": "Agent Zero",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009150",
  },
  {
    "id": 1011198,
    "name": "Agents of Atlas",
    "description": "",
    "modified": "2010-11-17T14:36:25-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011198",
  },
  {
    "id": 1011175,
    "name": "Aginar",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011175",
  },
  {
    "id": 1011136,
    "name": "Air-Walker (Gabriel Lan)",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011136",
  },
  {
    "id": 1011176,
    "name": "Ajak",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011176",
  },
  {
    "id": 1010870,
    "name": "Ajaxis",
    "description": "",
    "modified": "1969-12-31T19:00:00-0500",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a",
      "extension": "jpg"
    },
    "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010870",
  }
];



@Component({
  selector: 'app-root',
  template: `
  <pre>{{heroes | json}}</pre>
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  <div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
  </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    `]
  })
  export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    selectedHero: Hero;

    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }
