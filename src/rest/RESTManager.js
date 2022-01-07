const APIRequest = require("./APIRequest");

class RESTManager {
  constructor(client) {
    this.client = client;
  }

  getAuth() {
    if (this.client.token) return `Bearer ${this.client.token}`;
    throw new Error("TOKEN_MISSING");
  }

  async request(method, path, body = "", query = "") {
    const request = new APIRequest(this, method, path, body, query);
    return await request.make();
  }
}

module.exports = RESTManager;
