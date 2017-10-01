import React, { Component } from 'react';

import { Button, Container, Input, Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class TextWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      color: '#ffffff',
    }
  }

  addText = () => {
    this.props.addText(this.state.text, this.state.color);
  }

  changeText = (event, data) => {
    this.setState({
      text: data.value,
    });
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
          <Grid.Column width={3}>Add a Text</Grid.Column>
          <Grid.Column width={3}><Input onChange={this.changeText} placeholder="text" /></Grid.Column>
          <Grid.Column width={3}>Color: <ButtonColorPicker color={this.state.color} onChange={this.changeColor} /></Grid.Column>
          <Grid.Column width={3}><Button onClick={this.addText} >Add</Button></Grid.Column>
        </Grid> 
      </Container>
    );
  }
}
