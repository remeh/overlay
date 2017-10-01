import React, { Component } from 'react';

import { Container } from 'semantic-ui-react';
import TextWidget from './TextWidget.js';

export default class Editor extends Component {
  render() {
    return (
      <Container>
        <TextWidget addText={this.props.addText} />
      </Container>
    );
  }
}
