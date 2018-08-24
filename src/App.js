import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './stores';
import Application from './components/Application';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />  
      </Provider>
    );
  }
}

export default App;
