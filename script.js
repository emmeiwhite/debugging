// let's see how we can merge two arrays into one array using concat() method:

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const concatedArray = arr1.concat(arr2);
console.log("The concated array is :", concatedArray);

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// Let's try to flatten the nested array using reduce and concat technique

const flattened = nestedArray.reduce((acc, item) => {
  return acc.concat(item);
}, []);

console.log(flattened);

// ES10 way to flatten a nested array is by using flat() method:
const hereItIsFlattened = nestedArray.flat();

const obj1 = { food: "pizza", car: "ford" };
const obj2 = { animal: "dog" };

// Using spread operator we can easily merge two objects
const mergedObjects = { ...obj1, ...obj2 };

console.log(mergedObjects);

/* ------------------------ Some Questions about Javascript itself ---------------
  Q1: How does javascript work?
          (or)
      Explain the statement 'Javascript is a single threaded language that can be non-blocking'?
          (or)
      Explain the difference between asynchronous and synchronous in javascript?
*/
