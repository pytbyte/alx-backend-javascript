/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {DataView} - A DataView with the updated ArrayBuffer.
 * @throws {Error} - Throws an error if the position is outside the range.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to work with the ArrayBuffer
  const view = new DataView(buffer);
  view.setInt8(position, value);

  // Return the DataView with the updated ArrayBuffer
  return view;
}
