import React from 'react';

// FINISH THIS!
function createSuperComponent(Component){
  return class extends React.Component {
    render(){
      return <Component />;
    }
  }
}
