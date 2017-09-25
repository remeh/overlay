import React, { Component } from 'react';
import { Layer, Group, Rect, Stage, Text } from 'react-konva';

import Asset from './Asset';

export default class Display extends Component {
  render() {
    return (
      <Stage width={1280} height={720}>
        <Layer>
          <Asset
            src='./shot.jpg'
            width={1280}
            height={720}
          />
          <Group draggable={true}>
            <Rect
              x={0}
              y={690}
              width={1280}
              height={30}
              fill='green'
              opacity={0.5}
            />
            <Text
              text='Followers'
              x={10}
              y={700}
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
