require("../../templates/frontend/main.css")
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
// import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import Chat from './layout/Chat'
import { Provider } from 'react-redux'
import store from '../store'
class App extends Component {

  // componentDidMount() {
  //   store.dispatch(loadUser())
  // }

  render() {

    return (


      <Provider store={store}>

        <Fragment>

          <div className="container">

            <Chat />

          </div>
        </Fragment>

      </Provider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))