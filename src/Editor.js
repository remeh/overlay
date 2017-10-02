import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import RectWidget from './RectWidget.js';
import TextWidget from './TextWidget.js';

export default class Editor extends Component {
  render() {
    return (
      <Container>
        <TextWidget addText={this.props.addText} />
        <RectWidget addRect={this.props.addRect} />
      </Container>
    );
  }
}
