import React from 'react';
import './App.css';

function Header(){
    var today = new Date().getDate() + "." 
                + ((new Date().getMonth() + 1) < 10 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)) + "."
                + new Date().getFullYear();
    return (
        <div className="header bg-dark">
            <p className="start">My ToDoList</p>
            <p className="today">{today}</p>
        </div>
    )
}
export default Header; 