class Stack {
  constructor() {
    this.storage = {};
    this.counter = 0;
  };

  push(value) {
    this.counter++;
    this.storage[this.counter] = value;
  };

  pop() {
    if (this.counter > 0) {
      var prop = this.storage[this.counter];
      delete this.storage[this.counter];
      this.counter--;
      return prop;
    };
  };

  size() {
    return this.counter;
  };
};