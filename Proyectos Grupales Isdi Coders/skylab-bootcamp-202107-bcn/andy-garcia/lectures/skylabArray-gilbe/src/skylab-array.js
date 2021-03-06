class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(...values) {
    for (let i = 0; i < values.length; i += 1) {
      this[this.length] = values[i];
      this.length += 1;
    }

    return this.length;
  }

  map(callback) {
    const newArray = new SkylabArray();

    for (let index = 0; index < this.length; index += 1) {
      const element = callback(this[index]);
      newArray.push(element);
    }
    return newArray;
  }
}
module.exports = SkylabArray;
