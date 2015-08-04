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

/*
  The main benefit of using ES6 classes is simply that it is more idiomatic,
  improving compatibility with third party tools and libraries.

  Do not use inheritance on React Component Classes unless you REALLY REALLY
  know what you're doing. Use functional composition instead!
*/
