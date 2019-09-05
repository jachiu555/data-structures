var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;        // the "key" for the storage object
  // Implement the methods below
  someInstance.push = function(value) {
    counter++;                  // creates the next space (key) in the object
    storage[counter] = value;   // assigns the input value to that space at that key
  };

  someInstance.pop = function() {
    if (counter > 0) {          // as long as counter is positive
      var x = storage[counter]; // assign a variable to the value at that key in object
      delete storage[counter];  // delete the value from the key in object
      counter--;  // remove the key in object as well
      return x;   // return just the value that used to be at the key in the object
    };
  };

  someInstance.size = function() {
    return counter;           // used as reference to length
  };

  return someInstance;
};
