import React, {Component} from 'react';
import './App.css';

let path = "https://swapi.dev/api/planets/";

class Planets extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      planets: []
    }
  }

  componentDidMount(){
    fetch(path)
      .then(response => response.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            planets: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      );
  }

  render(){
    const { error, isLoaded, planets } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="planetsContainer">
          {planets.map(p => (
            <div class="card planetsCard">
              <div class="text-center">
                <hr/>
                  <p><b>{p.name}</b></p>
                <hr/>
              </div>
              <div class="card-body">
                <p class="card-text">Diameter: {p.diameter}</p>
                <p class="card-text">climate: {p.climate}</p>
                <p class="card-text">gravity: {p.gravity}</p>
                <p class="card-text">terrain: {p.terrain}</p>
                <p class="card-text">population: {p.population}</p>
              </div>
            </div>
            )
          )}
        </div>
      )
    }
  }
}

export default Planets