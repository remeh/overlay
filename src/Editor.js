import React, { Component } from 'react';
import { Layer, Rect, Stage } from 'react-konva';

import Asset from './Asset';

export default class Editor extends Component {
  render() {
    return (
      <Stage width={640} height={360}>
        <Layer>
          <Asset
            src='./shot.jpg'
            width={640}
            height={360}
          />
          <Rect
            x={0}
            y={330}
            width={640}
            height={30}
            fill='green'
            draggable={true}
            resizable={true}
          />
        </Layer>
      </Stage>
    );
  }
}
