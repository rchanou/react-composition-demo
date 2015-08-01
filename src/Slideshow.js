import React from 'react';
import Toggle from 'react-toggle';

// with webpack and appropriate loaders, you can include non-js assets
import './css/toggle-style.css';

// slides
import Slide1A from './slides/1a-es5-react';


const slides = [
  <Slide1A />
];

export default class Slideshow extends React.Component {

  state = {
    slideIndex: 0
  };

  render(){
    return slides[this.state.slideIndex];
  }

  componentDidMount(){

  }
}
