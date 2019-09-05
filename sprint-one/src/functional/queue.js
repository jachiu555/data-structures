var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var addKey = 0;
  var removeKey = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[addKey] = value;  // assign the value to the index in storage object aka 'a'
    addKey++;                 // increment index aka number 0, 1, 2, 3
  };

  // {a, b, c, d}
  // remove 'a', but where a was, index is 0,
  // so you must increment from the last position aka removeKey
  someInstance.dequeue = function() {
    var element = storage[removeKey];   // assign the value of the current index to a variable
    if (addKey > removeKey) {           // as long as there is something in storage {}
      delete element;                   // delete 'a' aka first element
      removeKey++;                      // go to next number from 0 on line 7
    };

    return element;                     // returns the value of the element in object
  };

  someInstance.size = function() {
    return addKey - removeKey;
  };

  return someInstance;
};
