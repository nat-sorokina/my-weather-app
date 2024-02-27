import React from 'react';
import './App.css';
import Weather from './components/Weather';



function App() {

  return (
    <div className="App" >
      <div className="overlay">
          <div className="container">
            <Weather
             />
          </div>    
      </div>
      
    </div>
  );
}

export default App;
