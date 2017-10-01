import React, { Component } from 'react';
import { Layer, Group, Stage, Text } from 'react-konva';

import Asset from './Asset';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: this.props.texts,
    };
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      texts: nProps.texts,
    });
  }

  onTextSelected = (text) => {
  }

  renderText = (text, idx) => {
    return (
      <Group key={'group-' + idx}
        draggable={true}
        >
        <Text
          onClick={() => { this.onTextSelected(text) }}
          text={text.text}
          x={text.x}
          y={text.y}
          fontSize={12}
          fill={text.color.color}
          shadowColor='black'
          shadowEnabled={true}
          shadowBlur={3}
        />
      </Group>
    )
  }

  render() {
    return (
      <Stage width={1280} height={720}>
        <Layer>
          <Asset
            src='./shot.jpg'
            width={896}
            height={504}
          />
          {this.state.texts.map((text, idx) => {
            return this.renderText(text, idx)
          })}
        </Layer>
      </Stage>
    );
  }
}
