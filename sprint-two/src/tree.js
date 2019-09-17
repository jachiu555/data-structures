var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me (.children property, an array containing a number of subtrees)

  _.extend(newTree, treeMethods);                               // in order to make the methods a function, must use extend to allow newTree to access treeMethods
  return newTree;
};

var treeMethods = {};                                           // object to hold the treeMethods we're implementing

treeMethods.addChild = function(value) {                        // takes in a value
  var subTree = Tree(value);                                    // to create a subTree, invoke the Tree function above to make one for us

  this.children.push(subTree);                                  // this.children refers to the property 'children' in the newTree object that's made, and pushes in a brand new subTree since the children property is an array

};  // TC for addChild is O(1) constant

treeMethods.contains = function(target) {                       // takes a target input

    if (this.value === target) {                                // if the value in the first tree is equal to target
      return true;                                              // return true
    }

    for (var i = 0; i < this.children.length; i++) {            // loop through the length of the children array
      if (this.children[i].contains(target)) {                  // if, during recursion through the children array's elements, equals target input
      return true;                                              // return true
    }
  }

  return false;                                                 // else returns false

};  // TC for contains is O(n) linear because we'll be only checking once



/*
 * Complexity: What is the time complexity of the above functions?
 */

