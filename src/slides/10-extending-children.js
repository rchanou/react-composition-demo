import React from 'react';

class RainbowList extends React.Component {
  static defaultProps = { Element: 'div' };

  render(){
    let { Element, children, ...otherProps } = this.props;

    let rainbowizeChild = (child, i) => {
      let rainbowStyle = {
        color: `hsl(${360 / children.length * i},50%,70%)`
      };
      return React.cloneElement(child, { style: rainbowStyle});
    };

    let rainbowChildren = React.Children.map(
      this.props.children,
      rainbowizeChild
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
  <li>Aardvarks</li>
  <li>Birds</li>
  <li>Cows</li>
  <li>Doggies</li>
  <li>Elephants</li>
</RainbowList>;

export { page, RainbowList };
