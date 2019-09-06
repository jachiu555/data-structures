var Queue = function() {
  this.storage = {};
  this.addKey = 0;
  this.removeKey = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.addKey] = value;
  this.addKey++;
};

Queue.prototype.dequeue = function() {
  var element = this.storage[this.removeKey];
  if (this.addKey > this.removeKey) {
    delete element;
    this.removeKey++;
  };

  return element;

};

Queue.prototype.size = function() {
  return this.addKey - this.removeKey;
};