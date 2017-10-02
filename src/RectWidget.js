import React, { Component } from 'react';

import { Button, Container, Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class RectWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: {
        color: '#000000',
        opacity: 0.5,
      }
    }
  }

  addRect = () => {
    this.props.addRect(this.state.color);
  }

  changeColor = (color) => {
    this.setState({
      color: color,
    });
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={3}>Add a Rect</Grid.Column>
          <Grid.Column width={3}>BG: <ButtonColorPicker onChange={this.changeColor} /></Grid.Column>
          <Grid.Column width={3}><Button onClick={this.addRect} >Add</Button></Grid.Column>
        </Grid> 
      </Container>
    );
  }
}
