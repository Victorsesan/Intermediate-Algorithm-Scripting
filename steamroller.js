function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);


//Use spread operator to concatenate each element of arr with an empty array
//Use Array.some() method to find out if the new array contains an array still
//If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
//If it does not, return the flattened array