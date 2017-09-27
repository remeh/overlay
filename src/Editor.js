import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import RectWidget from './RectWidget.js';

export default class Editor extends Component {
  render() {
    return (
      <Container>
        <RectWidget addRect={this.props.addRect} />
      </Container>
    );
  }
}

