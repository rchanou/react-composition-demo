// Component code to be transpiled with Babel
import React from 'react';

class MyComponent extends React.Component {
  static defaultProps = { text: 'ES2015+' }

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

export default MyComponent;

/*
  The main benefit of using ES6 classes is simply that it is more idiomatic,
  improving compatibility with third party tools and libraries.

  Do not use inheritance on React Component Classes! Use functional composition!
*/
