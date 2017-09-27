import React, { Component } from 'react';
import { Layer, Group, Rect, Stage, Text } from 'react-konva';

import Asset from './Asset';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rects: this.props.rects,
    };
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      rects: nProps.rects,
    });
  }

  renderRect = (rect, idx) => {
    console.log(rect.bg);
    return (
      <Group key={idx} draggable={true}>
        <Rect
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          fill={rect.bg.color}
          opacity={rect.bg.opacity}
        />
        <Text
          text={rect.text}
          x={rect.x+10}
          y={rect.y+10}
          fontSize={16}
          fill={rect.fg.color}
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
            width={1280}
            height={720}
          />
          {this.state.rects.map((rect, idx) => {
            return this.renderRect(rect, idx)
          })}
        </Layer>
      </Stage>

    );
  }
}
