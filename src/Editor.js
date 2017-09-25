import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import Rect from './Rect.js';

export default class Editor extends Component {

  render() {
    return (
      <Container>
        <Rect addRect={this.props.addRect} />
      </Container>
    );
  }
}

