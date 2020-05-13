import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Films from './Films'
import People from './People'
import Planets from './Planets'
import Starships from './Starships'
import Species from './Species'
import Vechicles from './Vechicles'

function Header(){
    return (
        <Router>
        <div className="pos-f-t">
            <nav className="navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span>Categories</span>
                </button>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                   <p><NavLink to='/films' className="navLink">Films</NavLink></p>
                   <p><NavLink to='/people' className="navLink">People</NavLink></p>
                   <p><NavLink to='/planets' className="navLink">Planets</NavLink></p>
                   <p><NavLink to='/starships' className="navLink">Starships</NavLink></p>
                   <p><NavLink to='/species' className="navLink">Species</NavLink></p>
                   <p><NavLink to='/vechicles' className="navLink">Vechicles</NavLink></p>
                </div>
            </div>
        </div>

        <Switch>
            <Route path='/films'>
                <Films/>
            </Route>
            <Route path='/people'>
                <People/>
            </Route>
            <Route path='/planets'>
                <Planets/>
            </Route>
            <Route path='/starships'>
                <Starships/>
            </Route>
            <Route path='/species'>
                <Species/>
            </Route>
            <Route path='/vechicles'>
                <Vechicles/>
            </Route>
        </Switch>
      </Router>
    )
}

export default Header;