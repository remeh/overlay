import React, { Component } from 'react';

import { Checkbox, Container, Dimmer, Divider, Dropdown, Segment} from 'semantic-ui-react';
import RectWidget from './RectWidget.js';
import TextWidget from './TextWidget.js';

export default class Editor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zone: this.props.currentZone,
    }
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      zone: nProps.currentZone,
    });
  }

  changeDisplayed = (event, data) => {
    this.props.setDisplayed(data.value);
  }

  render() {
    return (
      <Container>
        <h1>Editor</h1>
        <Dropdown onChange={this.changeDisplayed} defaultValue={this.props.currentZone.value} basic fluid selection options={this.props.dropdown} />
        <Divider hidden />
        <Checkbox toggle onChange={this.props.toggleActive} checked={this.state.zone.config.active} label='Active' />
        <Dimmer.Dimmable blurring dimmed={!this.state.zone.config.active} as={Segment}>
          <TextWidget zone={this.state.zone} setText={this.props.setText} />
          <Divider />
          <RectWidget zone={this.state.zone} setBg={this.props.setBg} />
        </Dimmer.Dimmable>
      </Container>
    );
  }
}
