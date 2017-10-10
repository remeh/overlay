import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    let zones = [
      {
        text: 'Left-top corner',
        key: 'left-top',
        value: 'left-top',
        active: true,
      },
      {
        text: 'Top',
        key: 'top',
        value: 'top',
        active: false,
      },
      {
        text: 'Right-top corner',
        key: 'right-top',
        value: 'right-top',
        active: true,
      },
    ];


    this.state = {
      zones: zones,
      currentZone: zones[0],
    };
  }

  setBg = (zone, color) => {
    console.log('setBg', zone, color);
  }

  setText = (zone, color) => {
    console.log('setText', zone, color);
  }

  toggleActive = () => {
    let currentZone = this.state.currentZone;
    currentZone.active = !currentZone.active;
    this.setState({
      currentZone: currentZone,
    });
  }

  setDisplayed = (zone) => {
    for (let idx in this.state.zones) {
      if (this.state.zones[idx].key === zone) {
        this.setState({
          currentZone: this.state.zones[idx],
        });
      }
    }
  }

  render() {
    return (<div>
      <Container>
        <Display zones={this.state.zones} />
      </Container>
      <Divider />
      <Container>
        <Editor
          currentZone={this.state.currentZone}
          zones={this.state.zones}
          setBg={this.setBg}
          setText={this.setText}
          toggleActive={this.toggleActive}
          setDisplayed={this.setDisplayed}
        />
      </Container>
    </div>);
  }
}
