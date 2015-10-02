import React, {Component} from 'react';
import { connect } from 'react-redux';

import {TodoList, AddTodo} from './components';
import {addTodo, checkTodo} from './actions';

class App extends Component {
  onTodoEntered(value) {
    this.props.dispatch(addTodo(value));
  }

  onTodoChecked(id) {
    this.props.dispatch(checkTodo(id));
  }

  render() {
    return (
      <div>
        <AddTodo onTodoEntered={::this.onTodoEntered} />
        <TodoList todos={this.props.todos} onTodoChecked={::this.onTodoChecked}/>
      </div>
    );
  }
}

// returns object whose keys will be injected as props
// of the smart component
function select(state) {
  return {
    todos: state.todos
  }
}

export default connect(select)(App);
