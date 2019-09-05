// we want to create the stackMethods object each time this function is run, with the methods automatically applied to the object we make. no need for extend now

var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.counter++;
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