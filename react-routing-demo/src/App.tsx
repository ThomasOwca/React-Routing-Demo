import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          <span>
            <Link to="/about">About</Link>
          </span>
        </p>
        
      </div>
    );
  } 
}

export default App;
