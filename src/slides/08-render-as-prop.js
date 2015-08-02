import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class MouseXTracker extends React.Component {

  state = { x: 0 };

  render(){
    return this.props.children(this.state.x);
  }

  componentDidMount(){
    $(window).mousemove(e => {
      this.setState({ x: e.pageX });
    });
  }
}

class MouseYTracker extends React.Component {

  state = { y: 0 };

  render(){
    return this.props.children(this.state.y);
  }

  componentDidMount(){
    $(window).mousemove(e => {
      this.setState({ y: e.pageY });
    });
  }

}

const xDisplay = <MouseXTracker>
  {x => <div>{x}</div>}
</MouseXTracker>;

const colorControl = <div>

</div>;

const page = <div>
  X: {xDisplay}
</div>;














export default page;
