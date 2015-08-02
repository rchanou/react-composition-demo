import React from 'react';
import ReactDOM from 'react-dom';

/*
  examples of render-as-a-prop components. for more awesome examples,
  check out react-motion and react-radio-group by chenglou.
*/

class Hover extends React.Component {
  state = { hovering: false }

  _onMouseOver = () => {
    this.setState({ hovering: true });
  }

  _onMouseOut = () => {
    this.setState({ hovering: false });
  }

  eventHandlerProps = {
    onMouseOver: this._onMouseOver,
    onMouseOut: this._onMouseOut
  }

  render(){
    let me = this.props.children(this.state.hovering);
    return React.cloneElement(me, this.eventHandlerProps);
  }
}

class Rotate extends React.Component {
  state = { value: 0 }

  _rotate = () => {
    this.setState({
      value: (this.state.value === 359)? 0: (this.state.value + 1)
    });
  }

  render(){
    return this.props.children(this.state.value);
  }

  componentDidMount(){
    this._rotateInterval = setInterval(() => {
      this.setState({
        value: (this.state.value === 359)? 0: (this.state.value + 1)
      });
    }, this.props.interval);
  }

  componentWillUnmount(){
    clearInterval(this._rotateInterval);
  }
}

let displayHover = <Hover>
  {hovering => <div>
    {hovering? 'Hovering': 'Not Hovering'}
  </div>}
</Hover>;

let displayRotate = <Rotate interval={50}>
  {val => <div>{val}</div>}
</Rotate>;

let arrow =
  <Rotate interval={30}>
    {angle => <Hover>
      {hovering => <div
        style={{
          transform: `rotate(${angle}deg)`,
          borderBottom: `40px solid ${hovering? 'pink': 'steelblue'}`,
          width: 0, height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
        }}
      />}
    </Hover>}
  </Rotate>;

let page = <div style={{ width: '100%', height: '100%' }}>
  {displayHover}
  {displayRotate}
  {arrow}
</div>;

export default page;
