// Component code without Babel
var React = require('react');

var ES5Component = React.createClass({
  getDefaultProps: function(){
    return { text: `I'm an ES5 component` };
  },

  getInitialState: function(){
    return { highlighted: false };
  },

  _onClick: function(e){
    this.setState({ highlighted: !this.state.highlighted });
  },

  render: function(){
    return <div
      style={{ backgroundColor: this.state.highlighted && 'aquamarine' }}
      onClick={this._onClick}
    >
      {this.props.text}
    </div>;
  }
});

module.exports = ES5Component;
