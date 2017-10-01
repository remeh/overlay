import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: [{
        text: 'Hello',
        x: 0,
        y: 330,
        width: 300,
        height: 100,
        color: {
          color: 'white',
          opacity: 1.0,
        },
      },{
        text: 'Followers',
        x: 0,
        y: 300,
        width: 300,
        height: 100,
        color: {
          color: 'white',
          opacity: 1.0,
        },
      }],
    };
  }

  addText = (text, color) => {
    let texts = this.state.texts.slice();
    texts.push({
      text: text,
      x: 0, y: 0,
      color: color,
    });
    this.setState({
      texts: texts,
    });
  }

  render() {
    return (<div>
      <Container>
        <Display texts={this.state.texts} />
      </Container>
      <Divider />
      <Container>
        <Editor addText={this.addText} />
      </Container>
    </div>);
  }
}
