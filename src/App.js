import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BoardComp from './BoardComp'

class App extends Component {

  constructor()
  {
    super()
    
  }
  render()
  {
    
    return(
      <div class="App">
          <BoardComp />
        
      </div>
    )
  }
}

export default App;
