import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Chat from './components/layout/Chat'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (

    <Provider store={store}>

      <div className="container">
        <Chat />

      </div>

    </Provider>
  );
}

export default App;


// require("../../templates/frontend/main.css")
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from '../store'
// import Chat from './layout/Chat'
// class App extends Component {

//   render() {
//     return (
//       <Provider store={store}>

//         <div className="container">
//           <Chat />

//         </div>

//       </Provider>
//     )
//   }

// }

// ReactDOM.render(<App />, document.getElementById('app'))

// // <div className="App container">
// {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       // <Chat />
//     // </div>