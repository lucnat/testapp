
import React from 'react';

export default class Todos extends React.Component {

  renderTodos() {

    const todos = [
      {text: 'Staubsuuge', done: false},
      {text: 'Rauche', done: true},
      {text: 'Holz hacke', done: false},
      {text: 'Bier trinke', done: false}
    ]
    
    return todos.map(todo => 
      <li style={{color: todo.done ? 'grey' : 'black'}}>
        {todo.text}
      </li>
    )
  }

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }

}

