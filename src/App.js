import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';

export default class App extends Component {
  addRect = (text, fg, bg) => {
    console.log('App.addRect:', text);
  }

  render() {
    return (<div>
      <Container>
        <Display />
      </Container>
      <Divider />
      <Container>
        <Editor addRect={this.addRect} />
      </Container>
    </div>);
  }
}
