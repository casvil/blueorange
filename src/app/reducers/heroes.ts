import { Action } from '@ngrx/store';

export const GET_HEROES = 'GET_HEROES';
export const ADD_HEROES = 'ADD_HEROES';
export const SELECT_HERO = 'SELECT_HERO';
export const SEARCH_HEROES = 'SEARCH_HEROES';

export function heroesReducer(state: any = {}, action: Action) {
  switch (action.type) {
    case GET_HEROES:
    return Object.assign({}, { heroes: action["action"] });

    case ADD_HEROES:
    return Object.assign({}, ...state, { heroes: state.heroes.concat(action["action"]) });

    case SELECT_HERO:
    return Object.assign({}, ...state, { selectedHero: action["action"]} );

    case SEARCH_HEROES:
    return Object.assign({}, ...state, { searchedHeroes: action["action"]} );

    default:
    return state;
  }
}
