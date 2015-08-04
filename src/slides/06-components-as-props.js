import React from 'react';


// component types can be passed as a prop like anything else

class Flex extends React.Component {
  static defaultProps = { tag: 'div' }

  render(){
    let { tag, style, children, ...otherProps } = this.props;

    let newStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
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


const flexDiv =
  <Flex
    style={{
      width: '100%',
      color: 'steelblue',
      justifyContent: 'space-around'
    }}
  >
    <div>This</div>
    <div>is</div>
    <div>Flexbox</div>
  </Flex>;


const flexForm = <Flex tag='form' action='' method='post'>
  <Flex tag='fieldset'>
    <legend>Form</legend>

    <Flex>
      <label>Amount:</label>
      <input type='number' />
    </Flex>

    <Flex>
      <label>Active:</label>
      <input type='checkbox' />
      <label>Priority:</label>
      <input type='checkbox' />
    </Flex>
  </Flex>
</Flex>;


////////////////////////////////////////////////////////////////////////////////

const page = <div style={{ width: '100%', height: '100%' }}>
  {flexDiv}
  {flexForm}
</div>;

export default { Flex, page };
