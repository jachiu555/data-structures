var LinkedList = function() {                   // LinkedList is a function
  var list = {};                                // that creates a list object
  list.head = null;                             // then assigns a head property to null value
  list.tail = null;                             // and a tail property to null value

  list.addToTail = function(value) {            // addToTail is a method function that takes in a value argument
    var newNode = Node(value);                  // assigns a new node by invoking the Node class below

    if (!list.head) {                           // if the list object does not have a head node
      list.head = newNode;                      // it will assign a node (with a value property ) as the head
    };

    list.head.next = newNode;                   // assigns a new node to the next 'space' (list.tail.next = newNode works as well, but this makes more sense to me)

    list.tail = newNode;                        // assign a new node to the list's tail

  };

  list.removeHead = function() {

    list.head = list.head.next;                 // assigns the current head node to the next property that is pointing to the next node object
    return list.head.value;                     // returns the value of the former head

  };

  list.contains = function(target) {

    while (list.head) {                         // while we are in the head node
      if (list.head.value === target) {         // if the value in the head node is equal to the target argument
        return true;                            // returns true that it contains the target that was added
      } else if (list.head.value !== target) {
        list.head = list.head.next;             // move onto the next node
      }
    }
    return false;                               // else returns false
  };

  return list;
};

var Node = function(value) {                    // Node is a class aka factory that takes in a value
  var node = {};                                // then creates a node object

  node.value = value;                           // assigns a value property to that value that we passed in
  node.next = null;                             // assigns the space next to it to null, which currently doesn't link or point to anything

  return node;                                  // returns the node object with these properties
};

/*
 * Complexity: What is the time complexity of the above functions?
 */