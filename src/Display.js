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
    this.setState({ zones: nProps.zones });
  }

  renderText = (zone, idx) => {
    let color = 'rgba('+zone.config.text.color.rgb.r+','+zone.config.text.color.rgb.g+','+zone.config.text.color.rgb.b+','+zone.config.text.color.rgb.a+')';
    return (
      <Text
        key={'text-'+idx}
        draggable={false}
        text={zone.config.text.value}
        x={zone.x+4}
        y={zone.y+4}
        fontSize={zone.config.text.size}
        fill={color}
        opacity={zone.config.text.color.rgb.a}
      />
    )
  }

  renderBg = (zone, idx) => {
    let color = 'rgba('+zone.config.bg.color.rgb.r+','+zone.config.bg.color.rgb.g+','+zone.config.bg.color.rgb.b+','+zone.config.bg.color.rgb.a+')';
    return (
      <Rect
        key={'bg-'+idx}
        draggable={false}
        x={zone.x+4}
        y={zone.y+4}
        width={zone.width}
        height={zone.height}
        fill={color}
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
