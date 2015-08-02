import React from 'react';

class RainbowList extends React.Component {
  static defaultProps = { Element: 'div' };

  render(){
    let { Element, children, ...otherProps } = this.props;

    let rainbowChildren = React.Children.map(
      this.props.children,
      (child, i) => {
        let rainbowStyle = {
          color: `hsl(${360 / children.length * i},50%,70%)`
        };
        return React.cloneElement(child, { style: rainbowStyle});
      }
    );

    return <Element {...otherProps}>
      {rainbowChildren}
    </Element>;
  }
}

let page = <RainbowList
  Element='ul'
  style={{
    width: '100%',
    height: '100%',
    border: '10px solid pink'
  }}
>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
  <li>Doggies</li>
  <li>Elephants</li>
</RainbowList>;

export default page;
