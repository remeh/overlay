import React, { Component } from 'react';

import { Container, Divider, Dropdown } from 'semantic-ui-react';
import RectWidget from './RectWidget.js';
import TextWidget from './TextWidget.js';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zones: [
        {
          text: 'Left-top corner',
          value: 'left-top',
        },
        {
          text: 'Top',
          value: 'top',
        },
        {
          text: 'Right-top corner',
          value: 'right-top',
        },
      ],
    }
  }
  render() {
    return (
      <Container>
        <h1>Select the part to edit:</h1>
        <Dropdown fluid selection options={this.state.zones} />
        <TextWidget addText={this.props.addText} />
        <Divider />
        <RectWidget addRect={this.props.addRect} />
      </Container>
    );
  }
}
