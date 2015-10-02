import React, {Component} from 'react';


export class TodoItem extends Component {
  render() {
    const {item} = this.props;
    return(
      <li><input type='checkbox' checked={item.completed} onChange={this.props.onTodoChecked}/>{item.text}</li>
    );
  }
}

export class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    return (
        <ul>
        {todos.map((todo, index) => {
            return <TodoItem key={index} item={todo} onTodoChecked={() => this.props.onTodoChecked(index)} />
        })}
        </ul>
    );
  }
}

export class AddTodo extends Component {
  onBlur(e) {
    this.props.onTodoEntered(e.currentTarget.value);
  }

  render() {
    return (
      <input type='text' placeholder='Enter todo' onBlur={::this.onBlur} />
    )
  }
}
