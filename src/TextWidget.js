import React, { Component } from 'react';

import { Checkbox, Grid, Input } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class TextWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.zone.config.text.value,
      fontSize: this.props.zone.config.text.size,
      bold: this.props.zone.config.text.bold,
      color: this.props.zone.config.text.color,
    }
  }

  changeFontSize = (event, data) => {
    this.setState({ fontSize: data.value });
    this.props.setText(this.state.text, this.state.color, this.state.bold, data.value);
  }

  changeText = (event, data) => {
    this.setState({ text: data.value });
    this.props.setText(data.value, this.state.color, this.state.bold, this.state.fontSize);
  }

  changeColor = (color) => {
    this.setState({ color: color });
    this.props.setText(this.state.text, color, this.state.bold, this.state.fontSize);
  }

  changeBold = (event, state) => {
    this.setState({
      bold: state.checked,
    });
    this.props.setText(this.state.text, this.state.color, state.checked, this.state.fontSize);
  }

  render() {
    return (
      <Grid>
        <Grid.Row columns={5}>
          <Grid.Column></Grid.Column>
          <Grid.Column><strong>Value</strong></Grid.Column>
          <Grid.Column><strong>Color</strong></Grid.Column>
          <Grid.Column><strong>Size</strong></Grid.Column>
          <Grid.Column><strong>Bold</strong></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={5}>
          <Grid.Column><strong>Text</strong></Grid.Column>
          <Grid.Column><Input onChange={this.changeText} placeholder="text" /></Grid.Column>
          <Grid.Column><ButtonColorPicker color={this.state.color} onChange={this.changeColor} /></Grid.Column>
          <Grid.Column><Input value={this.state.fontSize} placeholder="12" onChange={this.changeFontSize} /></Grid.Column>
          <Grid.Column><Checkbox toggle checked={this.state.bold} onChange={this.changeBold} /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
