/* eslint-disable prefer-rest-params */
class SkylabArray {
  constructor() {
    this.length = 0;

    if (arguments.length === 1 && typeof (arguments[0]) === 'number') {
      for (let i = 0; i < arguments[0]; i += 1) {
        this.push(undefined);
      }
    } else {
      for (let i = 0; i < arguments.length; i += 1) {
        this.push(arguments[i]);
      }
    }
  }

  push() {
    for (let i = 0; i < arguments.length; i += 1) {
      this[this.length] = arguments[i];
      this.length += 1;
    }
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const aux = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return aux;
  }

  map(callback) {
    const newArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      newArray.push(callback(this[i]));
    }
    return newArray;
  }

  some(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return true;
    }
    return false;
  }

  find(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return this[i];
    }
    return undefined;
  }

  filter(callback) {
    const aux = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) aux.push(this[i]);
    }
    return aux;
  }

  reverse() {
    const aux = new SkylabArray();
    // eslint-disable-next-line for-direction
    for (let i = this.length - 1; i >= 0; i -= 1) {
      aux.push(this[i]);
    }
    for (let i = 0; i < this.length; i += 1) {
      this[i] = aux[i];
    }
    return aux;
  }

  concat(sArr) {
    const aux = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      aux.push(this[i]);
    }
    if (sArr === undefined) return aux;
    if (sArr !== null && sArr.constructor === SkylabArray) {
      for (let i = 0; i < sArr.length; i += 1) {
        aux.push(sArr[i]);
      }
    } else {
      aux.push(sArr);
    }
    return aux;
  }

  findIndex(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) return i;
    }
    return -1;
  }

  indexOf(value) {
    for (let i = 0; i < this.length; i += 1) {
      if (value === this[i]) return i;
    }
    return -1;
  }

  join(value) {
    let result = '';
    if (value === undefined) {
      for (let i = 0; i < this.length - 1; i += 1) {
        result += `${this[i]},`;
      }
      result += this[this.length - 1];
    } else {
      for (let i = 0; i < this.length - 1; i += 1) {
        result += `${this[i]}${value}`;
      }
      result += this[this.length - 1];
    }

    return result;
  }
}
module.exports = SkylabArray;
