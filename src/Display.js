import React, { Component } from 'react';
import { Layer, Rect, Stage, Text } from 'react-konva';

import Asset from './Asset';
import Consts from './Consts';

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

  onTextSelected = (text) => {
  }

  onRectSelected = (rect) => {
  }

  renderText = (text, idx) => {
    return (
      <Text
        key={'text-'+idx}
        draggable={true}
        onClick={() => { this.onTextSelected(text) }}
        text={text.text}
        x={text.x}
        y={text.y}
        onDragMove={(event, data) => {this.onDragEnd(event, data, idx) }}
        fontSize={text.fontSize}
        fill={text.color.color}
        shadowColor='black'
        shadowEnabled={true}
        shadowBlur={3}
      />
    )
  }

  renderRect = (rect, idx) => {
    return (
      <Rect
        key={'rect-'+idx}
        draggable={true}
        onClick={() => { this.onRectSelected(rect) }}
        x={rect.x}
        y={rect.y}
        onDragMove={() => {this.onDragEnd(idx) }}
        width={rect.width}
        height={rect.height}
        fill={rect.color.color}
        opacity={rect.color.opacity}
      />
    )
  }

  render() {
    return (
      <Stage width={896} height={504}>
        <Layer>
          <Asset
            src='./shot.jpg'
            width={896}
            height={504}
          />
          {this.state.zones.map((zone, idx) => {
            switch (zone.type) {
                case Consts.Rect:
                  return this.renderRect(zone, idx)
                case Consts.Text:
                  return this.renderText(zone, idx)
                default:
            }
            return () => {};
          })}
        </Layer>
      </Stage>
    );
  }
}
