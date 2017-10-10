import React, { Component } from 'react';

import { Input, Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class TextWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      fontSize: 12,
      color: '#ffffff',
    }
  }

  setText = () => {
    this.props.setText(this.state.text, this.state.color, this.state.fontSize);
  }

  changeFontSize = (event, data) => {
    this.setState({
      fontSize: data.value,
    });
  }

  changeText = (event, data) => {
    this.setState({
      text: data.value,
    });

    this.setText();
  }

  changeColor = (color) => {
    this.setState({
      color: color,
    });
  }

  render() {
    return (
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column></Grid.Column>
          <Grid.Column><strong>Value</strong></Grid.Column>
          <Grid.Column><strong>Color</strong></Grid.Column>
          <Grid.Column><strong>Size</strong></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
          <Grid.Column><strong>Texte</strong></Grid.Column>
          <Grid.Column><Input onChange={this.setText} placeholder="text" /></Grid.Column>
          <Grid.Column><ButtonColorPicker color={this.state.color} onChange={this.changeColor} /></Grid.Column>
          <Grid.Column><Input placeholder="12" onChange={this.changeFontSize} /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
