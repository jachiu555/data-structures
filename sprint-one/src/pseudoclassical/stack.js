/*
new keyword does object delegation for you, and it also returns an object

pseudo-classical instantion allows a function to have methods, but will not need to return anything until the user or someone else explicitly declares a variable with the new keyword, which instantiates a new object, that object will have storage (which contains the standard object methods), counter, and a prototype object with push/pop/size as a nested object. a variable is assigned to new Stack();
*/

//this function doesn't return anything. removes the Object.create and return at the end

var Stack = function() {
  this.storage = {};          // holds all the standard Object methods
  this.counter = 0;
};

// create prototype object that has all these methods (push/pop/size) as well as the standard Object method that every object gets
Stack.prototype.push = function(value) {
  this.counter++
  this.storage[this.counter] = value;
};

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    var prop = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter--;
    return prop;
  };
};

Stack.prototype.size = function() {
  return this.counter;
};