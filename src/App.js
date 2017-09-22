import React, { Component } from 'react';
import { Layer, Rect, Stage } from 'react-konva';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stage width={640} width={360}>
          <Layer>
            <Rect
              x={10}
              y={10}
              width={250}
              height={250}
              fill='green'
              shadowBlur={5}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
