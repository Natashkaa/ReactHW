import React, {Component} from 'react';
import './App.css';

let path = "https://swapi.dev/api/films/";

class Films extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      films: []
    }
  }

  componentDidMount(){
    fetch(path)
      .then(response => response.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            films: result.results
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
    const { error, isLoaded, films } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="filmsContainer">
          {films.map(film => (
            <div class="card filmCard">
              <div class="text-center">
                <hr/>
                  <p><b>{film.title}</b></p>
                <hr/>
              </div>
              <div class="card-body">
                <p class="card-text">{film.opening_crawl}</p>
                <p class="card-text">Director: {film.director}</p>
                <p class="card-text">Producer: {film.producer}</p>
                <p class="card-text">Release date: {film.release_date}</p>
              </div>
            </div>
            )
          )}
        </div>
      )
    }
  }
}

export default Films