import React from 'react';
import Toggle from 'react-toggle';

// with webpack and appropriate loaders, you can include non-js assets
import './css/toggle-style.css';

// slides
import Slide1A from './slides/1a-es5-react';


export default class Slideshow extends React.Component {

  /*this.state = {
    slide: Slide1A
  };*/

  render(){
    //console.log(typeof this.state.slide);

    return <div>
      <h1>Hello, Joe.</h1>
      <Toggle
      />
    </div>;
  }
}
