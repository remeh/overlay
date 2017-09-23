import React, { Component } from 'react';
import { Image } from 'react-konva';

export default class Asset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      src: props.src,
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
    }
  }

  componentDidMount() {
    const img = new window.Image();
    img.src = this.state.src;
    img.onload = () => {
      this.setState({
        image: img,
      });
    }
  }

  render() {
    return <Image
             image={this.state.image}
             x={this.state.x}
             y={this.state.y}
             width={this.state.width}
             height={this.state.height}
            />
  }
}
