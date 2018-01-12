//reducers always have these two arguments and are only ever called when an action happens
//State argument is not application state, but only the state that this reducer is responsible for.

//ES6 syntax state = null defaults the state to null if it comes in as undefined.
//note you should NEVER mutate state only return a new copy of it. 
export default function(state = null, action){
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
