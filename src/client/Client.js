const RESTManager = require("../rest/RESTManager");

class Client {
  constructor(token) {
    this.token = token;
    this.rest = new RESTManager(this);
  }
}

module.exports = Client;
