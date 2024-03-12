function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");

//For every object in the collection array, check the truthiness of object’s property passed in pre parameter
//Array.prototype.every method internally checks if the value returned from the callback is truthy.
//Return true if it passes for every object. Otherwise, return false.