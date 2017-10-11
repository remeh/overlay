import React, { Component } from 'react';
import { Group, Layer, Rect, Stage, Text } from 'react-konva';

import Asset from './Asset';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zones: this.props.zones,
    };
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      zones: nProps.zones,
    });
  }

  renderText = (zone, idx) => {
    console.log(zone);
    return (
      <Text
        key={'text-'+idx}
        draggable={false}
        text={zone.config.text.value}
        x={zone.x}
        y={zone.y}
        fontSize={zone.config.text.size}
        fill={zone.config.text.color}
      />
    )
  }

  renderBg = (zone, idx) => {
    return (
      <Rect
        key={'bg-'+idx}
        draggable={false}
        x={zone.x}
        y={zone.y}
        width={zone.width}
        height={zone.height}
        fill={zone.config.bg.color}
        opacity={zone.config.bg.color.rgb.a}
      />
    )
  }

  renderZone = (zone, idx) => {
    if (!zone.config.active) {
      return;
    }

    console.log('render zone:', zone.value);

    let group = <Group key={zone.value}>
      {this.renderBg(zone, idx)}
      {this.renderText(zone, idx)}
    </Group>;
    return group;
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
          {this.state.zones.map((zone, idx) => this.renderZone(zone, idx))}
        </Layer>
      </Stage>
    );
  }
}
