import React from 'react';


// component types can be passed as a prop like anything else

class Flex extends React.Component {
  render(){
    let { tag, style, children, ...otherProps } = this.props;

    let newStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    };

    for (let key in style){
      newStyle[key] = style[key];
    }

    let Tag = tag;

    return <Tag {...otherProps} style={newStyle}>
      {children}
    </Tag>;
  }
}


const flexDiv = <Flex tag='div' style={{ width: '100%', color: 'steelblue' }}>
  <div>yo</div>
  <div>yo</div>
  <div>yo</div>
</Flex>;

const flexInput = <Flex tag='form'>
  <label>A:</label><input />
  <label>B:</label><input />
</Flex>;


////////////////////////////////////////////////////////////////////////////////

const page = <div style={{ width: '100%', height: '100%' }}>
  {flexDiv}
  {flexInput}
</div>;

export default { Flex, page };
