import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import ButtonColorPicker from './ButtonColorPicker.js';

export default class IconWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: this.props.zone.config.icon.icon,
      color: this.props.zone.config.icon.color,
    }
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      color: nProps.zone.config.icon.color,
      icon: nProps.zone.config.icon.icon,
    });
  }

  changeIcon = (icon) => {
    this.setState({
      icon: icon,
    });
    this.props.setIcon(icon, this.state.color);
  }

  changeColor = (color) => {
    this.setState({ color: color });
    this.props.setIcon(this.state.icon, color);
  }

  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column><strong>Icon</strong></Grid.Column>
          <Grid.Column><strong>Color</strong></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Grid.Column><strong>Icon</strong></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column><ButtonColorPicker color={this.state.color} onChange={this.changeColor} /></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
