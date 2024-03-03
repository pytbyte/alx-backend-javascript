/**
 * Displays a message on the STDOUT.
 * @param {String} msg The message to display.
 */
const displayMessage = (msg) => {
    if (typeof msg !== 'string') {
      console.error('Invalid input: msg must be a string');
      return;
    }
    console.log(msg);
  };
  
  module.exports.displayMessage = displayMessage;
  