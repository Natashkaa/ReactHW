import React, {Component} from 'react';
import './App.css';

let path = "https://swapi.dev/api/people/";

class People extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      people: []
    }
  }

  componentDidMount(){
    fetch(path)
      .then(response => response.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            people: result.results
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
    const { error, isLoaded, people } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="peopleContainer">
          {people.map(p => (
            <div class="card peopleCard">
              <div class="text-center">
                <hr/>
                  <p><b>{p.name}</b></p>
                <hr/>
              </div>
              <div class="card-body">
                <p class="card-text">{p.opening_crawl}</p>
                <p class="card-text">height: {p.height}</p>
                <p class="card-text">hair: {p.hair_color}</p>
                <p class="card-text">skin: {p.skin_color}</p>
                <p class="card-text">birth: {p.birth_year}</p>
                <p class="card-text">gender: {p.gender}</p>
              </div>
            </div>
            )
          )}
        </div>
      )
    }
  }
}

export default People