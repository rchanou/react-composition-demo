import React from 'react';


//// More ES6 features that work well with React

// let and const are like var with stricter, safer scoping

for (let i = 0; i < 9; i++){
  setTimeout(() => {
    console.log(i); // if we used var, it would print all 9s
  }, 1000);
}

const b = { foo: 'boo' };
//const b = 'nope'; // if uncommented, will cause build error!
b.foo = 'You can still change properties of const objects.';

////////////////////////////////////////////////////////////////////////////////


// fat arrow shorthand for one-line functions
const sum = (x, y) => x + y;

// same as...
const oldSum = function(x, y){
  return x + y;
}.bind(this);

////////////////////////////////////////////////////////////////////////////////


// functions can have default parameters
const power = (num, exponent = 2) => num ^ exponent;

console.log( power(5) );
// 25

////////////////////////////////////////////////////////////////////////////////


// spread and rest operators let us easily take apart objects & arrays
const props = {
  firstName: 'Anna',
  lastName: 'Banana',
  age: 42,
  location: 'Orange County'
};

const { firstName, ...rest } = props;

console.log(firstName);
//  Anna

console.log(rest);
/*  {
      lastName: 'Banana',
      age: 42,
      location: 'Orange County'
    }
*/

const allPropsAgain = { firstName, ...rest };

console.log(allPropsAgain); // same as first all

////////////////////////////////////////////////////////////////////////////////


// template literals allow cleaner string concatenation
// use backticks, NOT single quotes!
const backgroundColor = `hsl(${50 + 60 + 70}, 60%, 80%)`; // hsl(180,60%,80%)

// shorthand notation
const divStyle = {
  backgroundColor, // backgroundColor: backgroundColor
  height: '100%'
};

////////////////////////////////////////////////////////////////////////////////


export default <ul style={{ ...divStyle, width: '100%' }}>
  <li>{firstName}</li>
  <li>{rest}</li>
  <li>{allPropsAgain}</li>
</ul>;
