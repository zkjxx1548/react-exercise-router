import React, {Component} from 'react';
import '../styles/App.css';
import Router from './router/Router';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router />
      </div>
    );
  }
}

export default App;
