/**
 * Returns the sum of ids of a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} studentsArray - The list of students.
* @returns {Number} - The sum of student IDs.
*/
export default function getStudentIdsSum(studentsArray) {
  // Check if the input is an array
  if (studentsArray instanceof Array) {
    // Use the reduce function to calculate the sum of student IDs
    return studentsArray.reduce(
      (prevSum, currStudent) => prevSum + currStudent.id,
      0,
    );
  }
  // If the input is not an array, return 0
  return 0;
}
