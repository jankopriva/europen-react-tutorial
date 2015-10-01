import {ADD_TODO} from './actions';

const initialState = {
  todos: []
};

export function todoApp(state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch(action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, {
          text: action.text,
          completed: false
        }]
      });
    }

  return state;
}
