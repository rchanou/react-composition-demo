// Component code to be transpiled with Babel
import React from 'react';

class ES6Component extends React.Component {
  static defaultProps = { text: 'ES6S+' }

  state = { highlighted: false }

  _onClick = e => {
    this.setState({ highlighted: !this.state.highlighted });
  }

  render(){
    return <div
      style={{ backgroundColor: this.state.highlighted && 'pink' }}
      onClick={this._onClick}
    >
      {this.props.text}
    </div>;
  }
}

export default ES6Component;
