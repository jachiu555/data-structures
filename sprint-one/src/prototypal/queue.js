var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.addKey = 0;
  someInstance.removeKey = 0;

  return someInstance;
  
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.addKey] = value;
  this.addKey++;
};

queueMethods.dequeue = function() {
  var element = this.storage[this.removeKey];
  if (this.addKey > this.removeKey) {
    delete element;
    this.removeKey++;
  };

  return element;

};

queueMethods.size = function() {
  return this.addKey - this.removeKey;
};