import React from 'react';

// More ES6 features that work well with React


// let and const are like var with stricter, safer scoping
let a = 1;
const b = 2;

////////////////////////////////////////////////////////////////////////////////


// fat arrow shorthand for one-line functions
const sum = (x, y) => x + y;

// same as...
var oldSum = function(x, y){
  return x + y;
}.bind(this);

////////////////////////////////////////////////////////////////////////////////


// functions can have default parameters
const power = (num, exponent = 2) => num ^ exponent;

console.log( power(5) );
// 25

////////////////////////////////////////////////////////////////////////////////


// spread and rest operators let us easily take apart objects & arrays
let props = {
  firstName: 'Anna',
  lastName: 'Banana',
  age: 42,
  location: 'Orange County'
};

let { firstName, ...rest } = props;

console.log(firstName);
//  Anna

console.log(rest);
/*  {
      lastName: 'Banana',
      age: 42,
      location: 'Orange County'
    }
*/

let allPropsAgain = { firstName, ...rest };

console.log(allPropsAgain); // same as first all

////////////////////////////////////////////////////////////////////////////////


// template literals allow cleaner string concatenation
// use backticks, NOT single quotes!
let backgroundColor = `hsl(${50 + 60 + 70}, 60%, 80%)`; // hsl(180,60%,80%)

// shorthand notation
let divStyle = {
  backgroundColor, // backgroundColor: backgroundColor
  height: '100%'
};

////////////////////////////////////////////////////////////////////////////////


export default <ul style={{ ...divStyle, width: '100%' }}>
  <li>{firstName}</li>
  <li>{rest}</li>
  <li>{allPropsAgain}</li>
</ul>;
