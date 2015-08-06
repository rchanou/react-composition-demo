import React from 'react';

class Hover extends React.Component {
  state = { hovering: false }

  _eventHandlerProps = {
    onMouseOver: () => { // notice arrow, not "onMouseOver(){", to bind this
      this.setState({ hovering: true });
    },
    onMouseOut: () => {
      this.setState({ hovering: false });
    }
  }

  render(){
    // for this component, this.props.children must be a function
    // that returns a React element
    let element = this.props.children(this.state.hovering);

    // Since 'element' is a created React element (e.g. <div />),
    // props must be added to it with React.cloneElement
    return React.cloneElement(element, this._eventHandlerProps);
  }
}

////////////////////////////////////////////////////////////////////////////////


class Rotate extends React.Component {
  state = { value: 0 }

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

////////////////////////////////////////////////////////////////////////////////


const hoverText =
  <Hover>
    {hovering => <div>
      {hovering? 'Hovering': 'Not Hovering'}
    </div>}
  </Hover>;


const rotateNumber =
  <Rotate interval={50}>
    {val => <div>{val}</div>}
  </Rotate>;


const crazyArrow =
  <Rotate interval={30}>
    {angle => <Hover>
      {hovering => <div
        style={{
          transform: `rotate(${angle}deg)`,
          backgroundColor: hovering? 'pink': 'steelblue',
          width: 100,
          height: 100
        }}
      />}
    </Hover>}
  </Rotate>;


////////////////////////////////////////////////////////////////////////////////
// you don't have to pass render as a child. it can be a normal prop.
// it just looks better when you compose a bunch of them this way.
// for more examples, check out react-motion and react-radio-group by @chenglou.


const page = <div style={{ width: '100%', height: '100%' }}>
  {hoverText}
  {rotateNumber}
  {crazyArrow}
</div>;

export default page;
