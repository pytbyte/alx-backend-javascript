export default class HolbertonCourse {
  /**
     * Represents a Holberton Course.
     * @param {String} name - Name of the course.
     * @param {Number} length - Length of the course.
     * @param {String[]} students - Names of students in the course.
     */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
     * Retrieves the name of the course.
     * @returns {String} - The name of the course.
     */
  get name() {
    return this._name;
  }

  /**
     * Sets the name of the course.
     * @param {String} value - The name to set.
     * @throws {TypeError} - If the provided value is not a string.
     */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
     * Retrieves the length of the course.
     * @returns {Number} - The length of the course.
     */
  get length() {
    return this._length;
  }

  /**
     * Sets the length of the course.
     * @param {Number} value - The length to set.
     * @throws {TypeError} - If the provided value is not a number.
     */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
     * Retrieves the names of students in the course.
     * @returns {String[]} - Names of students in the course.
     */
  get students() {
    return this._students;
  }

  /**
     * Sets the names of students in the course.
     * @param {String[]} value - Names of students to set.
     * @throws {TypeError} - If the provided value is not an array of strings.
     */
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
