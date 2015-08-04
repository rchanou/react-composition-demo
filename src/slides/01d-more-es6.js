import React from 'react';

//// More ES6 features that work well with React

//// let and const are like var with stricter, safer scoping
let a = 1;
const b = 2;


//// the spread and rest operators let us easily split apart objects & arrays
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


//// template literals allow cleaner string concatenation
//   you need to use backticks for this, NOT single quotes!

// same as hsl(90,70%,70%)
let backgroundColor = `hsl(${20 + 30 + 40}, 70%, 70%)`;

// shorthand notation
let divStyle = {
  backgroundColor,
};


export default <ul style={{ ...divStyle, height: '100%' }}>
  <li>{firstName}</li>
  <li>{rest}</li>
  <li>{allPropsAgain}</li>
</ul>;
