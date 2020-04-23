import React, { useState } from 'react';

function TodoItem(props){
    const [done, setDone] = useState(false);
    
    return (
        <div className="todoList">
            <ul class="list-group">
                <li class="list-group-item form-check">
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)} />
                    {done ? (
                        <span className="todoItemChecked item">{props.text}</span>
                    ) : <span className="item">{props.text}</span>}
                    
                </li>
            </ul>
        </div>
    )
}

export default TodoItem;