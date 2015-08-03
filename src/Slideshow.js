import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// with webpack and appropriate loaders, you can include non-js assets
import './css/base.css';

// slides
import slide3 from './slides/03-constant-element';



import slide8 from './slides/08-render-as-prop';
import { page as slide10 } from './slides/10-extending-children';


const slides = [
  slide3,
  slide8,
  slide10
];


export default class Slideshow extends React.Component {

  state = {
    slideIndex: 0
  };

  render(){
    return slides[this.state.slideIndex];
  }

  componentDidMount(){
    $(document.body).keydown(e => {
      switch (e.keyCode){
        case 37:
          this.setState({
            slideIndex:
              this.state.slideIndex? (this.state.slideIndex - 1)
              : (slides.length - 1)
          });
        break;

        case 39:
          this.setState({
            slideIndex:
              (this.state.slideIndex >= slides.length - 1)? 0
              : (this.state.slideIndex + 1)
          });
        break;
      }
    });
  }
}
