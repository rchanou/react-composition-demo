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

let color = `hsl(${10 + 20 + 30}, 50%, 50%)`; // same as hsl(60,50%,50%)
