import React from 'react';


//// More ES6 features that work well with React

// let and const are like var with stricter, safer scoping

const nums = [];
for (let i = 0; i < 9; i++){
  setTimeout(() => {
    nums.push(i); // if we used var, they would all be 9's
  }, 1000);
}

const obj = { foo: 'boo' };
//const b = 'nope'; // if uncommented, will cause build error!
obj.foo = 'You can still change properties of const objects.';

////////////////////////////////////////////////////////////////////////////////


// fat arrow shorthand for one-line functions
const sum = (x, y) => x + y;

// same as...
const oldSum = function(x, y){
  return x + y;
}.bind(this);

////////////////////////////////////////////////////////////////////////////////


// functions can have default parameters
const sumThree = (x = 0, y = 0, z = 0) => x + y + z;

const sumThreeExample = sumThree(3, 5); // would be NaN without default z
// 8

////////////////////////////////////////////////////////////////////////////////


// spread and rest operators let us easily take apart objects & arrays
const props = {
  firstName: 'Anna',
  lastName: 'Banana',
  age: 42,
  location: 'Orange County'
};

const { firstName, ...rest } = props;
/*  const firstName = 'Anna';
    const rest = {
      lastName: 'Banana',
      age: 42,
      location: 'Orange County'
    };
*/

const allPropsAgain = { firstName, ...rest }; // same as first all


// can use spread/rest destructuring for variadic functions

const someNums = [2, 5, 7, 10];
const allNums = [...someNums, 3, 6, 8];
// allNums is:  [2, 5, 7, 10, 3, 6, 8]

const sumAll = (...all) => all.reduce( (sum, x) => sum + x );

const sumOfAllAndMore = sumAll(...allNums, 1, 4, 9);
// above becomes...     sumAll(2, 5, 7, 10, 3, 6, 8, 1, 4, 9)


////////////////////////////////////////////////////////////////////////////////


// template literals allow cleaner string concatenation
// use backticks, NOT single quotes
const backgroundColor = `hsl(${50 + 60 + 70}, 60%, 80%)`; // hsl(180,60%,80%)

// shorthand notation
const divStyle = {
  backgroundColor, // backgroundColor: backgroundColor
  height: '100%'
};


////////////////////////////////////////////////////////////////////////////////


export default <ul style={{ ...divStyle, width: '100%' }}>
  <li style={{ flexDirection: 'row' }}>{nums}</li>
  <li>{obj}</li>
  <li>{`Sum x+y+z: ${sumThreeExample}`}</li>
  <li>First Name: {firstName}</li>
  <li>Other: {rest}</li>
  <li>All: {allPropsAgain}</li>
  <li>{`All nums: ${allNums}`}</li>
  <li>{`Sum of all & more: ${sumOfAllAndMore}`}</li>
</ul>;
