import React from 'react';
import './App.css';
import {TODOITEMS} from './TodoData';
import TodoItem from './TodoItem'; 

export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [...TODOITEMS],
      isLoggedIn : true
    }

    this.changeList = this.changeList.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
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
  
  logIn(){
    this.setState(prevState => ({
      isLoggedIn: prevState
    }));
  }
  logOut(){
    this.setState(prevState => ({
      isLoggedIn: !prevState
    }));
  }

  render(){
    return (
      <div className="main">
        {this.state.isLoggedIn ? (
          <div>
            <button className="logOutBtn" onClick={this.logOut}>Log out</button>
              <div className="todoList">
                <ul className="list-group">
                  {this.state.list.map(item => <TodoItem
                    key={item.id}
                    id={item.id}
                    text={item.text} 
                    isCompleted={item.completed}
                    changeState={this.changeList}/>)
                  }
                </ul>
              </div>
          </div> 
        ) : <button className="logInBtn" onClick={this.logIn}>Log in</button>}
      </div>
    )
  }
}