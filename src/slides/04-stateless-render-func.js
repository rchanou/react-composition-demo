import React from 'react';

/*
  Stateless render functions: You can write any stateless React Component that
  doesn't use any lifecycle methods this way. It's like a render function with
  props and default props passed as parameters.

  React 0.14 can shallowly compare old and new props, giving you a free
  shouldComponentUpdate optimization in many cases.

  When should a Component have state? Depends, but one rule of thumb I use: if the triggering events start with the
  component and only affect what's within the component, it can be state. The classic case is the hovering tooltip.
  On the opposite end is data pulled from a database, which is best kept in a normalized external store and passed down
  as props.
*/


const renderButton =
  (text = 'Default Text', onClick) =>
    <button onClick={onClick}>
      {text}
    </button>;


const handler = () => { alert('You clicked me!') };

const page = <div style={{ height: '100%' }}>
  {renderButton()}
  {renderButton('A Button that Does Something', handler)}
</div>;


export default page;
