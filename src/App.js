import React from 'react';
import './App.css';
import {TODOITEMS} from './TodoData';
import TodoItem from './TodoItem'; 

export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [...TODOITEMS]
    }

    this.changeList = this.changeList.bind(this);
  }

  changeList(itemId) {
    // 1
    let curItem = this.state.list.find(i => i.id === itemId);
    // 2
    curItem.completed = !curItem.completed;
    // 3
    this.setState({
      list: [...this.state.list]
    });
  }

  render(){
    return (
      <div className="main">
        <div className="todoList">
            <ul className="list-group">
              {this.state.list.map(item => <TodoItem
                key={item.id}
                id={item.id}
                text={item.text} 
                isCompleted={item.completed}
                changeState={this.changeList}/>)}
            </ul>
        </div>
      </div>
    )
  }
}