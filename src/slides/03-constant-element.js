import React from 'react';


// Simple constant element reuse. React 0.14 optimizes for this.

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


////////////////////////////////////////////////////////////////////////////////

const page = <div style={{ height: '100%' }}>
  {sectionA}
  {sectionB}
</div>;

export default page;
