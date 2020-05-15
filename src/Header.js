import React from 'react';
import './App.css';
import { Reducer } from '../Marvel/Reducer';
import { createStore } from '../Marvel/createStore';
import { getMarvelHeroes } from '../Marvel/Actions';


function Header(){
    return (
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span>Categories</span>
                </button>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                   <p><button id="marvelButton">Marvel</button></p>
                </div>
            </div>
            <div id="heroesContainer">

            </div>
        </div>
    )
}

function render(){
    let res = store.getState();
    <div className="peopleContainer justify-content-center">
          {res.map(heroe => (
            <div className="card marvelCard">
                <img src={heroe.thumbnail.path + "." + heroe.thumbnail.extension} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">{heroe.name}</h5>
                    <p class="card-text">{heroe.description}</p>
                </div>
            </div>
            )
          )}
        </div>
}

export default Header;