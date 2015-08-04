import React from 'react';
import Toggle from 'react-toggle';
import { RainbowList } from './10-extending-children';

// children are just a special type of prop.

// standard html tags can of course have children.
let html = <ul>
  <li>Inner Child A</li>
  <li>Inner Child B</li>
  <li>Inner Child C</li>
</ul>;

// most React Components you use will probably be childless.
// you can give them children, but if they weren't programmed to do anything
// with it, they will be ignored like any other unused prop.
let boringChildlessComponent = <Toggle defaultChecked={true} />;

let neglectedChildren = <Toggle>
  <div>This component does not use me.</div>
  <div>We are the invisible children.</div>
</Toggle>;

// Some React Components do take children and do special stuff with them.
let rainbowList = <RainbowList>
  <div>We will be rendered!</div>
  <div>Yay!</div>
</RainbowList>;

// for React Components, the main advantage of passing in children is cleaner formatting.
// for example, this is what the above would look like without using children:
let uglyRainbowList = <RainbowList
  children={[
    <div>We will be rendered!</div>,
    <div>Yay!</div>
  ]}
/>;

// if you are writing a Component that can take more than one child, when using them,
// you will have to map over them with React.Children.map and React.Children.forEach
// because they are special data structures, not simple JS arrays.

// passing children to components does more than make it look cleaner.
// there is an undocumented feature called context where parent Components can pass
// props to nested children without manually passing them through children in between.
