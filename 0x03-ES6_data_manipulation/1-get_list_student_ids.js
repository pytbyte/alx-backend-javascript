/**
 * Returns ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} studentsArray
* @returns {Number[]} - An array containing only the student IDs.
*/
export default function getListStudentIds(studentsArray) {
  // Check if the input is an array
  if (studentsArray instanceof Array) {
    // Use the map function to create a new array containing only the student IDs
    return studentsArray.map((student) => student.id);
  }
  // If the input is not an array, return an empty array
  return [];
}
