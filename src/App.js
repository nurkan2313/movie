import React, { Component } from 'react';
import './App.css';
const data = require('./data.json');


const Movies = props => (
    <div className="cont">
        <div className="header">
            <h1>{props.show.name}</h1>
        </div>
        <img src={`/public/img/posters/${props.show.img}`} alt={props.show.name} height="40" width="70" />
        <p>Year: {props.show.year}</p>
    </div>
);


class App extends Component {
  render() {
    return (
        data.movies.map(
            show => (
                <Movies show={show}/>
            )
        )
    )
  }
}

export default App;
