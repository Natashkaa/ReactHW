import React from 'react';

function MainApp(props){
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <textarea className="form-control mr-sm-2" 
                       type="text"
                       placeholder="New ToDo"
                       name="newTodoItem"
                       value={props.newTodoItem}
                       onChange={e => props.changeInput(e.target.value, e.target.name)}></textarea>
                <button className="btn btn-outline-success my-2 my-sm-0" 
                        type="submit"
                        onClick={() => props.addNewItem()}>Add</button>
            </nav>
            <div className="todoList">
                <ul className="list-group">
                    {props.todoItems.map(i => (
                        <li className="list-group-item" key={i.id}>
                            <table>
                                <tr>
                                    <td><input type="checkbox" 
                                         checked={i.isChecked} 
                                         className="list-group-item"
                                         onChange={() => props.setCheck(i.id)}></input>
                                         {i.isChecked ? (
                                            <span className="todoItemChecked item">{i.description}</span>
                                         ) : <span className="item">{i.description}</span>}  
                                    </td>
                                    <td className="addTime">{i.addDate} {i.addTime}</td>
                                    <td><button className="deleteItem" onClick={() => props.deleteItem(i.id)}>delete</button></td>
                                </tr>
                            </table>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MainApp;