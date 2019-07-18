require("../../templates/frontend/main.css")
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Chat from './layout/Chat'
class App extends Component {

  render() {
    return (
      <Provider store={store}>

        <div className="container">
          <Chat />

        </div>

      </Provider>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
