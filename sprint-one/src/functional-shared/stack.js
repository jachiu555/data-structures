var Stack = function() {
  var someInstance = {};                  // creating object literal
  someInstance.storage = {};              // in that object literal, you're creating a storage key, and that key is an object
  someInstance.counter = 0;               // also create a key counter of value 0;

  _.extend(someInstance, stackMethods);   // applies the stackMethods functions we create to the object we made earlier on line 2

  return someInstance;                    // at the end of all operations, return the object we made with any modifications/additions

};

var stackMethods = {};                    // create an object that'll hold methods/functions

stackMethods.push = function(value) {
  this.counter++;                         // in order to reference the counter and storage keys we made in Stack variable on line 1, we need to use 'this' keyword
  this.storage[this.counter] = value;
}

stackMethods.pop = function() {
  if (this.counter > 0) {
    var prop = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return prop;
  };
};

stackMethods.size = function() {
  return this.counter;
};
