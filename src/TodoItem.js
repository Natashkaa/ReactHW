import React from 'react';

class TodoItem extends React.Component{
    render(){
        return (
            <li className="list-group-item form-check">
                <input type="checkbox" checked={this.props.isCompleted} onChange={() => 
                    {
                        return this.props.changeState(this.props.id);
                    }}/>
                {this.props.isCompleted ? (
                    <span className="todoItemChecked item">{this.props.text}</span>
                ) : <span className="item">{this.props.text}</span>}
            </li>
        )
    }
}

export default TodoItem;