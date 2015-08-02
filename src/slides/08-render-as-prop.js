import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Spring } from 'react-motion';

class MouseXTracker extends React.Component {
  state = { x: 0 };

  handleMouseMove = e => {
    this.setState({ x: e.pageX });
  }

  render(){
    return this.props.children(this.state.x);
  }

  componentDidMount(){
    $(window).mousemove(this.handleMouseMove);
  }

  componentWillUnmount(){
    $(window).off('mousemove', this.handleMouseMove);
  }
}

let xDisplay = <MouseXTracker>
  {x => <div>X: {x}</div>}
</MouseXTracker>;

class MouseYTracker extends React.Component {
  state = { y: 0 };

  handleMouseMove = e => {
    this.setState({ y: e.pageY });
  }

  render(){
    return this.props.children(this.state.y);
  }

  componentDidMount(){
    $(window).mousemove(this.handleMouseMove);
  }

  componentWillUnmount(){
    $(window).off('mousemove', this.handleMouseMove);
  }
}

let colorControl = <MouseYTracker>
  {y => <div
    style={{
      backgroundColor: `hsl(${y / window.innerHeight * 360}, 50%, 50%)`,
      width: 100,
      height: 50
    }}
  />}
</MouseYTracker>;

let compass = <MouseXTracker>
  {x => <MouseYTracker>
    {y => <div
      style={{
        width: 0, height: 0,
        borderLeft: '20px solid transparent',
        borderRight: '20px solid transparent',
        borderBottom: '40px solid pink',
        transform: 'rotate(18deg)'
      }}
    />}
  </MouseYTracker>}
</MouseXTracker>;

let animatedList = <div>

</div>;

let page = <div style={{ width: '100%', height: '100%' }}>
  {xDisplay}
  {colorControl}
  {compass}
</div>;

export default page;
