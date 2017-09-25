import React, { Component } from 'react';

import { Button, Container, Input, Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class Rect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  addRect = () => {
    // TODO(remy): add fg and bg colors.
    this.props.addRect(this.state.text, null, null);
  }

  changeText = (event, data) => {
    this.setState({
      text: data.value,
    });
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={3}>Add a Rect</Grid.Column>
          <Grid.Column width={3}><Input onChange={this.changeText} placeholder="text" /></Grid.Column>
          <Grid.Column width={3}>BG: <ButtonColorPicker /></Grid.Column>
          <Grid.Column width={3}>FG: <ButtonColorPicker /></Grid.Column>
          <Grid.Column width={3}><Button onClick={this.addRect} >Add</Button></Grid.Column>
        </Grid> 
      </Container>
    );
  }
}
