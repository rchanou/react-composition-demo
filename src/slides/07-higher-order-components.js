import React from 'react';
import Toggle from 'react-toggle';
import '../css/toggle-style.css';


// higher order components
// classes can be passed as parameters and returned like objects


function makeLogged(Component){
  return class extends React.Component {
    render(){
      return <Component {...this.props} />;
    }

    componentWillMount(){
      console.log('will mount', this.props);
    }

    componentDidMount(){
      console.log('did mount', this.props);
    }

    componentWillUnmount(){
      console.log('will unmount', this.props);
    }
  }
}


const LoggedToggle = makeLogged(Toggle);


const page = <div style={{ height: '20%' }}>
  This is a higher-order logged Toggle component. It will print to the console
  when it mounts and unmounts.
  <LoggedToggle defaultChecked={Math.random() < 0.5} />
</div>;


export default page;
