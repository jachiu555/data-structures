

// Instantiate a new graph
var Graph = function() {
  // pseudoclassical will instatiate new object, so don't need anything here
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this[node] = {};                            // 'this' is the parent object and setting a node property as an empty nested object
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return this.hasOwnProperty(node);           // if the parent object has own property node, returns true automatically, if not, returns false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  delete this[node];                          // delete the selected node in the parent object

  for (var key in this) {                     // for in loop through the parent object keys
    if (this[key][node]) {                    // if there are any edges attached to the keys
      delete this[key][node];                 // delete those references too
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this[fromNode][toNode] && this[toNode][fromNode]) {     // if the toNode is a property of the parent object's fromNode, and vice versa
    return true;                                              // return true for connected
  } else {
    return false;                                             // else return false
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this[fromNode][toNode] = toNode                             // setting a toNode property to fromNode property with a passed-in toNode
  this[toNode][fromNode] = fromNode                           // setting a fromNode property to toNode property with a passed-in fromNode

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  delete this[fromNode][toNode];                              // simply delete edges between toNode and fromNode

  delete this[toNode][fromNode];                              // deletes the other references

  // TESTED: don't actually need to delete both, just one for test to pass
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var node in this) {                   // for every node in the parent object
    cb(node);                                // pass in callback on the
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


