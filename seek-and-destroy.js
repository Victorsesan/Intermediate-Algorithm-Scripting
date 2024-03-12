function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

//Using spread operator to retrieve the arguments.Return the filtered array, using includes().