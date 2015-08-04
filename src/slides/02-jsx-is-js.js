import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';


// these are the same
const a = <div>JSX is just JavaScript</div>;

const b = React.createElement('div', null, 'JSX is just JavaScript');

////////////////////////////////////////////////////////////////////////////////


// these are the same
const c = <Toggle defaultChecked={true} />;

const d = React.createElement(Toggle, { defaultChecked: true });

////////////////////////////////////////////////////////////////////////////////


// these are the same
const e = <div style={{ width: '100%' }}>
  <Toggle defaultChecked={false} />
  <Toggle defaultChecked={true} />
</div>;

const f =
  React.createElement(
    'div',
    { style: { width: '100%' } },
    React.createElement(Toggle, { defaultChecked: false }),
    React.createElement(Toggle, { defaultChecked: true })
  );

////////////////////////////////////////////////////////////////////////////////











const rowStyle = { flexDirection: 'row', width: '80%' };

export default <div style={{ height: '100%', width: '100%' }}>
  <div style={rowStyle}>
    {a}{b}
  </div>
  <div style={rowStyle}>
    {c}{d}
  </div>
  <div style={rowStyle}>
    {e}{f}
  </div>
</div>;
