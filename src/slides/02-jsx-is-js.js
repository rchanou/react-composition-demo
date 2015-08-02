import React from 'react';

import Toggle from 'react-toggle';
// side note: here is an example of loading css w/ the help of webpack loaders
import '../css/toggle-style.css';


// these are the same

const a = <div>JSX is just JavaScript</div>;

const b = React.createElement('div', null, 'JSX is just JavaScript');


// these are the same

const c = <Toggle />;

const d = React.createElement(Toggle);
