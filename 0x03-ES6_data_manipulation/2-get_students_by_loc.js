/**
 * Returns an array of students located in a specific city.
 * @param {Object[]} studentsArray - The list of students.
 * @param {String} city - The city to filter students by.
 * @returns {Object[]} - An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(studentsArray, city) {
  if (studentsArray instanceof Array) {
    return studentsArray.filter((student) => student.location === city);
  }
  return [];
}
