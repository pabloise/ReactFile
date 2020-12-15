import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="WrapperMain">
          <h1>Technicians</h1>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
