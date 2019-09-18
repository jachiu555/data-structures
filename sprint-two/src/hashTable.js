var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);                  // get a bucket

  if (!bucket) {                                          // if it doesnt exist
    bucket = [];                                          // create it
    this._storage.set(index, bucket);                     // store it
  }

  var found = false;                                      // insert a new tuple if no key found, so keep track here

  for (var i = 0; i < bucket.length; i++) {               // iterate over bucket
    var tuple = bucket[i];                                // variable for tuple
    if (tuple[0] === k) {                                 // if key exists
      tuple[1] = v;                                       // update the 2nd index with the value
      found = true;                                       // set found to true
      break;                                              // break out of loop
    }
  }

  if (!found) {                                           // if no key found
    bucket.push([k, v]);                                  // insert a new tuple
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {               // iterate through the bucket
    var tuple = bucket[i];                                // set a tuple variable
    if (tuple[0] === k) {                                 // if the first index in the tuple is equal to key
      return tuple[1];                                    // return the value in the 2nd index
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (!bucket) {                                          // if bucket doesn't exist
    return null;                                          // return null
  }

  for (var i = 0; i < bucket.length; i++) {               // iterate through the bucket
    var tuple = bucket[i];                                // set tuple variable
    if (tuple[0] === k) {                                 // if tuple at 1st index is equal to key
      bucket.splice(i, 1);                                // splice tuple out
      return tuple[1];                                    // and just return the value at 2nd index
    }
  }

  return null;                                            // otherwise return null

};

// Did not get too far in hashTable.js. Reviewed Solution Video online and Google to process and reinforce understanding.

/*
 * Complexity: What is the time complexity of the above functions?
 */


