import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';

class TrippyComponent extends React.Component {
  state = { hue: 0 }

  render(){
    let { Tag, style, ...otherProps } = this.props;
    let newStyle = {};
    for (let key in style){
      newStyle[key] = style[key];
    }
    newStyle.backgroundColor = `hsl(${this.state.hue},50%,50%)`;
    return React.cloneElement(
      <Tag {...otherProps} />,
      { style: newStyle }
    );
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      if (this.state.hue === 359){
        this.setState({ hue: 0 });
      } else {
        this.setState({ hue: this.state.hue + 1 });
      }
    }, 30);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
}

const trippyDiv = <TrippyComponent Tag='div'
  style={{ width: 50, height: 50 }}
/>;

const trippyInput = <TrippyComponent Tag='input' />;

const trippyToggle = <TrippyComponent Tag={Toggle} defaultChecked={true} />;

const page = <div style={{ height: '100%' }}>
  {trippyDiv}
  {trippyInput}
  {trippyToggle}
</div>;


export default { TrippyComponent, page };
