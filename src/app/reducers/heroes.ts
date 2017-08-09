import { Action } from '@ngrx/store';

export const GET_HEROES = 'GET_HEROES';
export const ADD_HEROES = 'ADD_HEROES';

export function heroesReducer(state: Array<any> = [], action: Action) {
  switch (action.type) {
    case GET_HEROES:
    return action["action"];

    case ADD_HEROES:
    return state.concat(action["action"]);

    default:
    return state;
  }
}
