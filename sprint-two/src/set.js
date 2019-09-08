var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me                                // refer storage to an object
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = true;                                 // insert item into the storage object and set to true
};

setPrototype.contains = function(item) {
  return this._storage[item];                                 // will return true if item is in storage object
};

setPrototype.remove = function(item) {
  this._storage[item] = false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
