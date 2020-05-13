import React, {Component} from 'react';
import './App.css';

let path = "https://swapi.dev/api/vehicles/";

class Vehicles extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      vehicles: []
    }
  }

  componentDidMount(){
    fetch(path)
      .then(response => response.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            vehicles: result.results
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
    const { error, isLoaded, vehicles } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="vechiclesContainer">
          {vehicles.map(v => (
            <div class="card vechiclesCard">
              <div class="text-center">
                <hr/>
                  <p><b>{v.name}</b></p>
                <hr/>
              </div>
              <div class="card-body">
                <p class="card-text">Model: {v.model}</p>
                <p class="card-text">Manufacturer: {v.manufacturer}</p>
                <p class="card-text">Cost in credits: {v.cost_in_credits}</p>
                <p class="card-text">Length: {v.length}</p>
                <p class="card-text">Max atmosphering_speed: {v.max_atmosphering_speed}</p>
                <p class="card-text">Crew: {v.crew}</p>
                <p class="card-text">passengers: {v.passengers}</p>
                <p class="card-text">Cargo capacity: {v.cargo_capacity}</p>
                <p class="card-text">Consumables: {v.consumables}</p>
                <p class="card-text">Vehicle class: {v.vehicle_class}</p>
              </div>
            </div>
            )
          )}
        </div>
      )
    }
  }
}

export default Vehicles