class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return 'Error';
    }
    const lastValue = this[this.length - 1];
    delete this[this.length - 1];
    this[this.length] -= 1;
    return lastValue;
  }

  map(callback) {
    const newArray = new SkylabArray();
    for (let index = 0; index < this.length; index += 1) {
      const element = callback(this[index]);
      newArray.push(element);
    }
    return newArray;
  }

  some(callback) {
    if (this.length === 0) {
      return false;
    }
    for (let index = 0; index < this.length; index += 1) {
      const boolean = callback(this[index]);
      if (boolean) {
        return true;
      }
    }
    return false;
  }

  every(callback) {
    if (this.length === 0) {
      return true;
    }
    for (let index = 0; index < this.length; index += 1) {
      const boolean = callback(this[index]);
      if (!boolean) {
        return false;
      }
    }
    return true;
  }

  find(callback) {
    if (this.length === 0) {
      return undefined;
    }
    for (let index = 0; index < this.length; index += 1) {
      const boolean = callback(this[index]);
      if (boolean) {
        return index;
      }
    }
    return undefined;
  }

  concat(otherArray) {
    const newArray = new SkylabArray();
    for (let index = 0; index < this.length; index += 1) {
      newArray.push(this[index]);
    }
    for (let index = 0; index < otherArray.length; index += 1) {
      newArray.push(otherArray[index]);
    }
    return newArray;
  }

  filter(callback) {
    const newArray = new SkylabArray();
    if (this.length === 0) {
      return newArray;
    }
    for (let index = 0; index < this.length; index += 1) {
      const boolean = callback(this[index]);
      if (boolean) {
        newArray.push(this[index]);
      }
    }
    return newArray;
  }

  reverse() {
    const myReversedArray = new SkylabArray();
    for (let index = this.length - 1; index >= 0; index -= 1) {
      myReversedArray.push(this[index]);
    }
    return myReversedArray;
  }

  reduce(callback) {
    if (this.length === 0) {
      return TypeError;
    }
    if (this.length === 1) {
      return this[0];
    }
    if (this.length > 1) {
      let acumulator = this[0];
      for (let index = 1; index < this.length; index += 1) {
        const result = callback(acumulator, this[index]);
        acumulator = result;
      }
      return acumulator;
    }
  }
}

module.exports = SkylabArray;
