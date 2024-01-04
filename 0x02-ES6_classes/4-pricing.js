import Currency from './3-currency';

/**
 * Represents a Pricing class.
 */
export default class Pricing {
  /**
   * Creates a new pricing instance.
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency object.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Retrieves the price amount.
   * @returns {number} - The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the price amount.
   * @param {number} value - The price amount to set.
   * @throws {TypeError} - If the provided value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Retrieves the currency object.
   * @returns {Currency} - The currency object.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency object.
   * @param {Currency} value - The currency object to set.
   * @throws {TypeError} - If the provided value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency instance');
    }
    this._currency = value;
  }

  /**
   * Provides the full string representation of the price and currency.
   * @returns {String} - The full string representation of the price and currency.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts a price amount based on a conversion rate.
   * @param {number} amount - The price amount to convert.
   * @param {number} conversionRate - The conversion rate to apply.
   * @returns {number} - The converted price amount.
   * @throws {TypeError} - If the provided values are not numbers.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
