// importing required files
import React from 'react';
import './App.css';
import Ipod from "./Ipod.js";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {/* Rendering Ipod */}
        <Ipod />
      </div>
    );
  }
}

//Exporting App
export default App;
