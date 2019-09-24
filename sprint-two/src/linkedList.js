var LinkedList = function() {                   // LinkedList is a function
  var list = {};                                // that creates a list object
  list.head = null;                             // then assigns a head property to null value
  list.tail = null;                             // and a tail property to null value

  list.addToTail = function(value) {            // addToTail is a method function that takes in a value argument
    var newNode = Node(value);                  // assigns a new node by invoking the Node class below

    if (!list.head) {                           // if the list object does not have a head node
      list.head = newNode;                      // it will assign a node (with a value property ) as the head
      list.tail = newNode;                      // it will assign a node (with a value property ) as the tail
    } else {
      list.tail.next = newNode;                 // assigns a new node so the next 'space' can reference/point to it
      list.tail = newNode;                      // assign a new node to the list's tail
    }


  };  // TC for addToTail is constant O(1). We're not iterating through other nodes to add a new node

  list.removeHead = function() {
    var oldHead = list.head;                    // create a variable to store the old head so that we can return it's value later

    list.head = list.head.next;                 // assigns the current head node to the next property that is pointing to the next node object and makes that one the next head node
    return oldHead.value;                       // returns the value of the former head

  };  // TC for removeHead is constant O(1). We're only removing one head node at a time. No iterations needed

  list.contains = function(target) {
    var currentNode = list.head;                  // assign the currentNode to the list.head
    while (currentNode) {                         // while currentNode exists
      if (currentNode.value === target) {         // if the value in the current Node is equal to the target argument
        return true;                              // returns true that it contains the target that was added
      } else if (currentNode.value !== target) {  // if the value at the currentNode ISN'T the target
        currentNode = currentNode.next;           // point the currentNode to the next currentNode
      }
    }
    return false;                                 // else returns false
  };

  return list;

};  // TC is linear O(n) because in order to check for target value, we must iterate through each node once

var Node = function(value) {                    // Node is a class aka factory that takes in a value
  var node = {};                                // then creates a node object

  node.value = value;                           // assigns a value property to that value that we passed in
  node.next = null;                             // assigns the space next to it to null, which currently doesn't link or point to anything

  return node;                                  // returns the node object with these properties
};

/*
 * Complexity: What is the time complexity of the above functions?
 */