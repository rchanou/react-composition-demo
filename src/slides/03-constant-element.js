import React from 'react';

//// simple constant element reuse

const header = <h1>ReactJS OC</h1>;

const sectionA = <div>
  {header}
  <div>
    This is section A.
  </div>
</div>;

const sectionB = <div>
  {header}
  <div>
    This is section B.
  </div>
</div>;

export default <div style={{ height: '100%' }}>
  {sectionA}
  {sectionB}
</div>;
