import React from 'react';

class RainbowList extends React.Component {
  static defaultProps = { Tag: 'div' };

  render(){
    let { Tag, children, ...otherProps } = this.props;

    let rainbowChildren = React.Children.map(
      children,
      (child, i) => {
        let rainbowStyle = {
          color: `hsl(${360 / children.length * i},50%,70%)`
        };
        return React.cloneElement(child, { style: rainbowStyle });
      }
    );

    return <Tag {...otherProps}>
      {rainbowChildren}
    </Tag>;
  }
}

let page = <RainbowList
  Tag='ul'
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
