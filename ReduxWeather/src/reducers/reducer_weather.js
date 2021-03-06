import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('ACTION: ', action);
  switch(action.type) {
    case FETCH_WEATHER:
      return [ ...state, action.payload.data ];
  }
  return state;
}
