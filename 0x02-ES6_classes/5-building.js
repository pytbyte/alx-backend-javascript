/**
 * Represents a Building class.
 */
export default class Building {
  /**
     * Creates a new Building instance.
     * @param {Number} sqft - The square footage of the building.
     */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  /**
     * Retrieves the square footage of the building.
     * @returns {Number} - The square footage.
     */
  get sqft() {
    return this._sqft;
  }

  /**
     * Sets the square footage of the building.
     * @param {Number} value - The square footage to set.
     * @throws {TypeError} - If the provided value is not a number.
     */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }
}
