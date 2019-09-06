class Queue {
  constructor() {
    this.storage = {};
    this.addKey = 0;
    this.removeKey = 0;
  };

  enqueue(value) {
    this.storage[this.addKey] = value;
    this.addKey++
  };

  dequeue() {
    var prop = this.storage[this.removeKey];

    if (this.addKey > this.removeKey) {
      delete this.storage[this.removeKey];    // delete the value only. if you delete prop, it deletes the whole var prop = this.storage[this.removeKey];
      //console.log(prop) to check
      this.removeKey++;
    };

    return prop;

  };

  size() {
    return this.addKey - this.removeKey;
  };

};

