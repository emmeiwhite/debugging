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
  return null;
}, []);

console.log(flattened);
