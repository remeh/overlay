import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class RectWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.zone.config.bg.color,
    }
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      color: nProps.zone.config.color,
    });
  }

  changeColor = (color) => {
    this.setState({
      color: color,
    });
    this.props.setBg(color);
  }

  render() {
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column></Grid.Column>
          <Grid.Column><strong>Color</strong></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column><strong>Background</strong></Grid.Column>
          <Grid.Column><ButtonColorPicker color={this.state.color} onChange={this.changeColor} /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
