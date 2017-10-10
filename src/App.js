import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zones: [],
    };
  }

  setBg = (zone, color) => {
    console.log('setBg', zone, color);
  }

  setText = (zone, color) => {
    console.log('setText', zone, color);
  }

  render() {
    return (<div>
      <Container>
        <Display zones={this.state.zones} />
      </Container>
      <Divider />
      <Container>
        <Editor setBg={this.setBg} setText={this.setText} />
      </Container>
    </div>);
  }
}
