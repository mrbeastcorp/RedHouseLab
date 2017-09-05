import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Article from './Article';
import Home from './Home';
import Corsi from './Corsi';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/scuola" component={Article} />
        <Route path="/corsi" component={Corsi} />
        <Route path="/docenti" component={Article} />
        <Route path="/portfolio" component={Article} />
        <Route path="/stampa" component={Article} />
        <Route path="/contatti" component={Article} />
      </div> 
    );
  }
}

export default App;
