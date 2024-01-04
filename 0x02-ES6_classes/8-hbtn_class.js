export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() { return this._size; }

  set size(value) { if (typeof value !== 'number') throw new TypeError('size must be a number'); this._size = value; }

  get location() { return this._location; }

  set location(value) { if (typeof value !== 'string') throw new TypeError('location must be a string'); this._location = value; }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return this.size;
      case 'string':
        return this.location;
      default:
        return this;
    }
  }
}
