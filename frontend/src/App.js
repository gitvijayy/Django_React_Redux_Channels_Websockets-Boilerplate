import React from 'react';
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

