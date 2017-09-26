import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rects: [{
        text: 'Hello',
        x: 0,
        y: 330,
        width: 300,
        height: 100,
      },{
        text: 'Followers',
        x: 0,
        y: 300,
        width: 300,
        height: 100,
      }],
    };
  }

  addRect = (text, fg, bg) => {
    console.log('App.addRect:', text);
  }

  render() {
    return (<div>
      <Container>
        <Display rects={this.state.rects} />
      </Container>
      <Divider />
      <Container>
        <Editor addRect={this.addRect} />
      </Container>
    </div>);
  }
}
