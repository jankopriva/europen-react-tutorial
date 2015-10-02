import {ADD_TODO, CHECK_TODO} from './actions';

const initialState = {
  todos: []
};

function checkTodo(todos, id) {
  const newTodos = [].concat(todos);
  newTodos[id].completed = true;
  return newTodos;
}

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
    case CHECK_TODO:
      return Object.assign({}, state, {
        todos: checkTodo(state.todos, action.id)
      });
  }

  return state;
}
