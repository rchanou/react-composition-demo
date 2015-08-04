import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';


function makeLogged(Component){
  return class extends React.Component {
    render(){
      return <Component {...this.props} />;
    }
    componentWillMount(){
      console.log('will mount');
    }
    componentDidMount(){
      console.log('did mount');
    }
    componentWillUnmount(){
      console.log('will unmount');
    }
  }
}


let LoggedToggle = makeLogged(Toggle);


const page = <div style={{ height: '20%' }}>
  This is a higher-order logged Toggle component.
  <LoggedToggle defaultChecked={true} />
</div>;


export default page;
