// Component code to be transpiled with Babel
import React from 'react';

class MyComponent extends React.Component { // idiomatic ES6 class
  static defaultProps = { text: 'ES2015+' };
  // ^ default props are just static property of class

  // state is just private property of class
  state = { highlighted: false };



  render(){ // function property shorthand
    return <div
      style={{ backgroundColor: this.state.highlighted && 'pink' }}
      onClick={this._onClick.bind(this) /*custom funcs not auto-bound*/}
    >
      {this.props.text}
    </div>;
  } // no commas! these are methods in a class, not functions in a plain object

  _onClick(e){
    this.setState({ highlighted: !this.state.highlighted });
  }
}

export default MyComponent; // export and default keywords
