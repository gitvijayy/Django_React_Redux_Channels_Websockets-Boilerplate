import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  // const proxy = 'http://127.0.0.1:8000'

  const test = (e) => {
    e.preventDefault()
    axios.get('/api/chat').then(res => {

      console.log("asd")
    })

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <button onClick={(e) => { test(e) }}>Test 1234</button>
      </header>


    </div>
  );
}

export default App;
