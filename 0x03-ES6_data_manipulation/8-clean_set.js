/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub-string.
 * @param {Set<string>} set - A collection of strings.
 * @param {string} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {string} - Joined string after stripping the leading sub-string.
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString) && value !== startString)
    .map((value) => value.substring(startString.length))
    .join('-');
}
