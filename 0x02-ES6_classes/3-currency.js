/**
 * Represents a Currency class.
 */
export default class Currency {
  /**
     * Creates a new currency instance.
     * @param {String} code - The currency code symbol.
     * @param {String} name - The currency name.
     */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
     * Retrieves the currency code.
     * @returns {String} - The currency code symbol.
     */
  get code() {
    return this._code;
  }

  /**
     * Sets the currency code.
     * @param {String} value - The currency code to set.
     * @throws {TypeError} - If the provided value is not a string.
     */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  /**
     * Retrieves the currency name.
     * @returns {String} - The currency name.
     */
  get name() {
    return this._name;
  }

  /**
     * Sets the currency name.
     * @param {String} value - The currency name to set.
     * @throws {TypeError} - If the provided value is not a string.
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
     * Provides the full string representation of the currency.
     * @returns {String} - The full string representation of the currency.
     */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
