import React, { Component } from 'react';
import './App.css';
const data = require('./data.json');

class App extends Component {
  render() {
    return (
        data.movies.map(
            show => (
                <div className="cont">
                    <div id="header">
                        <h1>{show.name}</h1>
                    </div>
                    <img src={`/public/img/posters/${show.img}`} alt={show.name} height="40" width="70" />
                    <p>{show.year}</p>
                </div>
            )
        )
    )
  }
}

export default App;
