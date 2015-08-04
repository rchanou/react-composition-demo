import React from 'react';
import _ from 'lodash';

// FINISH THIS!
function Logger(Component){
  return class extends React.Component {
    render(){
      return <Component />;
    }
  }
}


const createLoggedComponent = _.memoize(){
  
}
