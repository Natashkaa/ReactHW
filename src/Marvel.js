import React, {Component} from 'react';
import './App.css';
import md5 from 'js-md5';

class Marvel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      heroes: []
    }
  }

  render(){
    const { error, isLoaded, heroes } = this.state;
    if(error){
      return <div>Ошибка: {error}</div>
    }
    else if(!isLoaded){
      return <div>Загрузка...</div>
    }
    else{
      return(
        <div className="peopleContainer justify-content-center">
          {heroes.map(heroe => (
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
      )
    }
  }
}

export default Marvel