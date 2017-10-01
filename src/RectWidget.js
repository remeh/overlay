import React, { Component } from 'react';

import { Button, Container, Input, Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class TextWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      fg: '#ffffff',
      bg: '#000000',
    }
  }

  addText = () => {
    // TODO(remy): add fg and bg colors.
    this.props.addText(this.state.text, this.state.fg, this.state.bg);
  }

  changeText = (event, data) => {
    this.setState({
      text: data.value,
    });
  }

  changeFg = (fg) => {
    this.setState({
      fg: fg,
    });
  }

  changeBg = (bg) => {
    this.setState({
      bg: bg,
    });
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={3}>Add a Text</Grid.Column>
          <Grid.Column width={3}><Input onChange={this.changeText} placeholder="text" /></Grid.Column>
          <Grid.Column width={3}>BG: <ButtonColorPicker onChange={this.changeBg} /></Grid.Column>
          <Grid.Column width={3}>FG: <ButtonColorPicker onChange={this.changeFg} /></Grid.Column>
          <Grid.Column width={3}><Button onClick={this.addText} >Add</Button></Grid.Column>
        </Grid> 
      </Container>
    );
  }
}
