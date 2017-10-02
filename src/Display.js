import React, { Component } from 'react';
import { Layer, Rect, Stage, Text } from 'react-konva';

import Asset from './Asset';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: this.props.texts,
      rects: this.props.rects,
    };
  }

  componentWillReceiveProps(nProps) {
    this.setState({
      texts: nProps.texts,
      rects: nProps.rects,
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
        fontSize={12}
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
        width={rect.width}
        height={rect.height}
        fill={rect.color.color}
        opacity={rect.color.opacity}
      />
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
          {this.state.rects.map((rect, idx) => {
            return this.renderRect(rect, idx)
          })}
        </Layer>
      </Stage>
    );
  }
}
