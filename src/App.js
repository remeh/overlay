import React, { Component } from 'react';

import { Button, Container } from 'semantic-ui-react';
import Editor  from './Editor.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Editor />
        <Button>
          Add rect
        </Button>
      </Container>
    );
  }
}
