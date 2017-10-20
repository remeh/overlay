import React, { Component } from 'react'
import reactCSS from 'reactcss'

import { ChromePicker } from 'react-color'

export default class ButtonColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayColorPicker: false,
      color: this.props.color,
    };
  }


  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    // store the change
    this.setState({ color: color })
    // transmit the change
    this.props.onChange(color);
  };

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.rgb.r }, ${ this.state.color.rgb.g }, ${ this.state.color.rgb.b }, ${ this.state.color.rgb.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
        <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
        <div style={ styles.cover } onClick={ this.handleClose }/>
        <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }
      </div>
    )
  }
}
