import React from 'react';

import Toggle from 'react-toggle';
// side note: here is an example of loading css w/ the help of webpack loaders
import '../css/toggle-style.css';


//// these are the same

let a = <div>JSX is just JavaScript</div>;

let b = React.createElement('div', null, 'JSX is just JavaScript');


//// these are the same

let c = <Toggle />;

let d = React.createElement(Toggle);


//// these look the same

let e = <div style={{ width: '100%' }}>
  <Toggle defaultChecked={false} />
  <Toggle defaultChecked={true} />
</div>;

let f =
  React.createElement(
    'div',
    { style: { width: '100%' } },
    [
      React.createElement(Toggle, false),
      React.createElement(Toggle, true)
    ]
  );
