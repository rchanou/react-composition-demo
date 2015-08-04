import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// with webpack and appropriate loaders, you can include non-js assets
import './css/base.css';

// slides
import intro from './slides/00-intro';
import ES5Component from './slides/01a-es5-react';
import ES6Component from './slides/01b-es6-react';
import slide1d from './slides/01d-more-es6';
import slide2 from './slides/02-jsx-is-js';
import slide3 from './slides/03-constant-element';
import slide4 from './slides/04-stateless-render-func';
import slide5 from './slides/05-children';
import { page as slide6 } from './slides/06-components-as-props';
import slide7 from './slides/07-higher-order-components';
import slide9 from './slides/09-render-as-prop';
import { page as slide8 } from './slides/08-extending-children';


const slide1 = <div style={{ height: '100%' }}>
  <ES5Component />
  <ES6Component />
</div>

const slides = [
  intro,
  slide1,
  slide1d,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9
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

console.log('child test', React.Children.toArray);
