import React, { Component } from 'react';
import { Layer, Group, Rect, Stage, Text } from 'react-konva';

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
          <Group draggable={true}>
            <Rect
              x={0}
              y={330}
              width={640}
              height={30}
              fill='green'
              opacity={0.5}
            />
            <Text
              text='Followers'
              x={10}
              y={340}
              fontSize={16}
              fill='white'
              shadowColor='black'
              shadowEnabled={true}
              shadowBlur={3}
            />
          </Group>
        </Layer>
      </Stage>

    );
  }
}
