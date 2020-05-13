import React, {Component} from 'react';
import './App.css';

let path = "https://swapi.dev/api/starships/";

class Starships extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      starships: []
    }
  }

  componentDidMount(){
    fetch(path)
      .then(response => response.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            starships: result.results
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
    const { error, isLoaded, starships } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="starshipsContainer">
          {starships.map(ship => (
            <div class="card starshipsCard">
              <div class="text-center">
                <hr/>
                  <p><b>{ship.name}</b></p>
                <hr/>
              </div>
              <div class="card-body">
                <p class="card-text">Model: {ship.model}</p>
                <p class="card-text">Manufacturer: {ship.manufacturer}</p>
                <p class="card-text">Length: {ship.length}</p>
                <p class="card-text">Max_atmosphering_speed: {ship.max_atmosphering_speed}</p>
                <p class="card-text">Crew: {ship.crew}</p>
                <p class="card-text">Cargo_capacity: {ship.cargo_capacity}</p>
              </div>
            </div>
            )
          )}
        </div>
      )
    }
  }
}

export default Starships