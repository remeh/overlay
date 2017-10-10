import React, { Component } from 'react';

import { Container, Divider } from 'semantic-ui-react';
import Display from './Display.js';
import Editor from './Editor.js';
import './App.css';

let dropdownEntries = [
  {
    text: 'Left-top corner',
    key: 'left-top',
    value: 'left-top',
  },
  {
    text: 'Top',
    key: 'top',
    value: 'top',
  },
  {
    text: 'Right-top corner',
    key: 'right-top',
    value: 'right-top',
  },
]

export default class App extends Component {
  constructor(props) {
    super(props);

    // zones configuration

    const defaultConfig = {
      active: false,
      text: {
        value: '',
        color: {
          r: 25,
          g: 25,
          b: 25,
          a: 0.8,
        },
        size: '12',
      },
      bg: {
        color: {
          r: 225,
          g: 225,
          b: 225,
          a: 0.5,
        },
      },
    }

    let zones = [
      {
        value: 'left-top',
        config: Object.assign({}, defaultConfig),
      },
      {
        value: 'top',
        config: Object.assign({}, defaultConfig),
      },
      {
        value: 'right-top',
        config: Object.assign({}, defaultConfig),
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

  setText = (text, color, size) => {
    let currentZone = this.state.currentZone;
    currentZone.config.text.value = text;
    currentZone.config.text.color = color;
    currentZone.config.text.size = size;
    this.updateZoneConfig(currentZone.config);
  }

  toggleActive = () => {
    let currentZone = this.state.currentZone;
    currentZone.config.active = !currentZone.config.active;
    this.updateZoneConfig(currentZone.config);
  }

  updateZoneConfig = (config) => {
    let zones = this.state.zones.slice();
    for (let idx in this.state.zones) {
      if (this.state.zones[idx].value === this.state.currentZone.value) {
        zones[idx].config = config;
        break;
      }
    }

    let currentZone = this.state.currentZone;
    currentZone.config = config;
    this.setState({
      currentZone: currentZone,
      zones: zones,
    });
  }

  setDisplayed = (zone) => {
    for (let idx in this.state.zones) {
      if (this.state.zones[idx].value === zone) {
        this.setState({
          currentZone: this.state.zones[idx],
        });
        break;
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
          dropdown={dropdownEntries}
          setBg={this.setBg}
          setText={this.setText}
          toggleActive={this.toggleActive}
          setDisplayed={this.setDisplayed}
        />
      </Container>
    </div>);
  }
}
