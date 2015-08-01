// Component code without Babel
var React = require('react');

var MyComponent = React.createClass({
  getDefaultProps: function(){
    return { text: 'ES5' };
  },

  getInitialState: function(){
    return { highlighted: false };
  },

  render: function(){
    return <div
      style={{ backgroundColor: this.state.highlighted && 'aquamarine' }}
      onClick={this._onClick}
    >
      {this.props.text}
    </div>;
  },

  _onClick: function(e){
    this.setState({ highlighted: !this.state.highlighted });
  }
});

module.exports = MyComponent;
