import React, { Component } from 'react';

import Editor from './Editor.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
      </div>
    );
  }
}