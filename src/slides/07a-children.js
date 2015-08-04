import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';
import { RainbowList } from './08-extending-children';

// children is just a prop with some special behavior.


let vanillaHtml = <ul>
  <li>Inner Child A</li>
  <li>Inner Child B</li>
  <li>Inner Child C</li>
</ul>;


let boringChildlessComponent = <Toggle defaultChecked={true} />;


let neglectfulParent = <Toggle>
  <div>
    We cause unintented effects.
  </div>
  <div>
    We are unwanted children.
  </div>
</Toggle>;


let rainbowList = <RainbowList>
  <div>
    Our parent uses us!
  </div>
  <div>
    Woohoo!
  </div>
</RainbowList>;


let uglyRainbowList = <RainbowList
  children={[
    <div>
      Our parent uses us!
    </div>,
    <div>
      However, we are also ugly.
    </div>
  ]}
/>;


////////////////////////////////////////////////////////////////////////////////
export default <div style={{ height: '100%' }}>
  {boringChildlessComponent}
  {neglectfulParent}
  {rainbowList}
  {uglyRainbowList}
</div>;
