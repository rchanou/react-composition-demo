import React from 'react';
import ReactDOM from 'react-dom';

// with webpack and appropriate loaders, you can include non-js assets
import './css/base.css';

import Slideshow from './Slideshow';

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

const slideShow = <Slideshow>
  {intro}
  {slide1}
  {slide1d}
  {slide2}
  {slide3}
  {slide4}
  {slide5}
  {slide6}
  {slide7}
  {slide8}
  {slide9}
</Slideshow>;


ReactDOM.render(slideShow, document.getElementById('root'));
