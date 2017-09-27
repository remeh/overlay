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
        bg: {
          color: 'green',
          opacity: 0.3,
        },
        fg: {
          color: 'white',
          opacity: 1.0,
        },
      },{
        text: 'Followers',
        x: 0,
        y: 300,
        width: 300,
        height: 100,
        bg: {
          color: 'red',
          opacity: 0.3,
        },
        fg: {
          color: 'white',
          opacity: 1.0,
        },
      }],
    };
  }

  addRect = (text, fg, bg) => {
    console.log('App.addRect:', text);
    console.log('fg', fg);
    console.log('bg', bg);
    let rects = this.state.rects.slice();
    rects.push({
      text: text,
      x: 0, y: 0,
      width: 300, height: 100,
      fg: fg,
      bg: bg,
    });
    this.setState({
      rects: rects,
    });
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
