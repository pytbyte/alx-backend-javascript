/**
 * Contains route handlers.
 * @param {http.IncomingMessage} req - request
 * @param {http.ServerResponse} res - response
 */
class AppController {
    static getHomepage(request, response) {
      response.status(200).send('Hello Holberton School!');
    }
  }
  
  export default AppController;