import React, {Component} from 'react';
import './App.css';

let path = "https://swapi.dev/api/species/";

class Species extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      species: []
    }
  }

  componentDidMount(){
    fetch(path)
      .then(response => response.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            species: result.results
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
    const { error, isLoaded, species } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="speciesContainer">
          {species.map(s => (
            <div class="card speciesCard">
              <div class="text-center">
                <hr/>
                  <p><b>{s.name}</b></p>
                <hr/>
              </div>
              <div class="card-body">
                <p class="card-text">Classification: {s.classification}</p>
                <p class="card-text">Designation: {s.designation}</p>
                <p class="card-text">Average_height: {s.average_height}</p>
                <p class="card-text">Skin: {s.skin_colors}</p>
                <p class="card-text">Hair: {s.hair_colors}</p>
                <p class="card-text">Eye: {s.eye_colors}</p>
                <p class="card-text">Average lifespan: {s.average_lifespan}</p>
                <p class="card-text">Language: {s.language}</p>
              </div>
            </div>
            )
          )}
        </div>
      )
    }
  }
}

export default Species