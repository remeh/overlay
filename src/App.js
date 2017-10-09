import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';
import Consts from './Consts.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objects: [{
        type: Consts.Rect,
        x: 0,
        y: 0,
        width: 300,
        height: 100,
        color: {
          color: 'red',
          opacity: 0.7,
        },
      }, {
        type: Consts.Text,
        text: 'Hello',
        x: 0,
        y: 330,
        width: 300,
        height: 100,
        fontSize: 12,
        color: {
          color: 'white',
          opacity: 1.0,
        },
      }, {
        type: Consts.Text,
        text: 'Followers',
        x: 0,
        y: 300,
        width: 300,
        height: 100,
        fontSize: 12,
        color: {
          color: 'white',
          opacity: 1.0,
        },
      }],
    };
  }

  addText = (text, color, fontSize) => {
    let objects = this.state.objects.slice();
    objects.push({
      type: Consts.Text,
      text: text,
      fontSize: fontSize,
      x: 0, y: 0,
      color: color,
    });
    this.setState({
      objects: objects,
    });
  }

  addRect = (color) => {
    let objects = this.state.objects.slice();
    objects.push({
      type: Consts.Rect,
      x: 0,
      y: 0,
      width: 300,
      height: 100,
      color: color,
    });
    this.setState({
      objects: objects,
    });
  }

  render() {
    return (<div>
      <Container>
        <Display objects={this.state.objects} />
      </Container>
      <Divider />
      <Container>
        <Editor addRect={this.addRect} addText={this.addText} />
      </Container>
    </div>);
  }
}
