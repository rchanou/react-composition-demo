import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';
import { RainbowList } from './08-extending-children';

// Children is just a prop with some special behaviors.

// Standard html tags can of course have children.
const standardHtml = <ul>
  <li>Inner Child A</li>
  <li>Inner Child B</li>
  <li>Inner Child C</li>
</ul>;

// Most React Components you use will probably be childless.
// You can give them children, but if they weren't programmed to do anything
// with it, they will be ignored like any other unused prop.
const boringChildlessComponent = <Toggle defaultChecked={true} />;

const neglectfulParent = <Toggle>
  <div>
    We cause unintented effects.
  </div>
  <div>
    We are unwanted children.
  </div>
</Toggle>;

// React Components CAN be written to take children and do whatever they want
// with them. You can just render them directly or create modified versions
// and return those. You will have to manipulate child elements with some
// React utility functions that will be shown in the next slides.
const rainbowList = <RainbowList>
  <div>
    Our parent uses us!
  </div>
  <div>
    Woohoo!
  </div>
</RainbowList>;

// For React Components, the main advantage of passing in children
// is cleaner formatting. You can pass in children like any other prop as below.
// However, it will become more and more top-heavy as you compose more
// components. Thus, any prop that is an element, a set of elements, or a
// function that returns an element, is probably best passed in as above.
const uglyRainbowList = <RainbowList
  children={[
    <div>
      Our parent uses us too!
    </div>,
    <div>
      However, we are also ugly.
    </div>
  ]}
/>;

// Passing children to components does more than make it look cleaner.
// There is an undocumented feature called context where parent Components can
// pass props to nested children without manually passing them through
// children in between.
////////////////////////////////////////////////////////////////////////////////

export default <div style={{ height: '100%' }}>
  {standardHtml}
  {boringChildlessComponent}
  {neglectfulParent}
  {rainbowList}
  {uglyRainbowList}
</div>;
