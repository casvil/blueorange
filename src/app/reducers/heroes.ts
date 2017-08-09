import { Action } from '@ngrx/store';

export const GET_HEROES = 'GET_HEROES';
export const ADD_HEROES = 'ADD_HEROES';
export const SELECT_HERO = 'SELECT_HERO';

export function heroesReducer(state: any = {}, action: Action) {
  switch (action.type) {
    case GET_HEROES:
    return Object.assign({}, { heroes: action["action"] });

    case ADD_HEROES:
    return Object.assign({}, { heroes: state.heroes.concat(action["action"]) });

    case SELECT_HERO:
    // console.log('action', action["action"])
    return Object.assign({}, ...state, { selectedHero: action["action"]} );

    default:
    return state;
  }
}
