import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';
import { RainbowList } from './08-extending-children';

// children is just a prop with some special behaviors.

const vanillaHtml = <ul>
  <li>Inner Child A</li>
  <li>Inner Child B</li>
  <li>Inner Child C</li>
</ul>;


const boringChildlessComponent = <Toggle defaultChecked={true} />;


const neglectfulParent = <Toggle>
  <div>
    We cause unintented effects.
  </div>
  <div>
    We are unwanted children.
  </div>
</Toggle>;


const rainbowList = <RainbowList>
  <div>
    Our parent uses us!
  </div>
  <div>
    Woohoo!
  </div>
</RainbowList>;


const uglyRainbowList = <RainbowList
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
