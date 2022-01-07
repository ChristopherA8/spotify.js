const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class APIRequest {
  constructor(rest, method, path, body = "", query = "") {
    this.rest = rest;
    this.method = method;
    this.body = body;

    let queryString = "";
    if (query) {
      const query = Object.entries(query)
        .filter(([, value]) => value !== null && typeof value !== "undefined")
        .flatMap(([key, value]) =>
          Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
        );
      queryString = new URLSearchParams(query).toString();
    }
    this.path = `${path}${queryString && `?${queryString}`}`;
  }

  async make() {
    const url = "	https://api.spotify.com/v1" + this.path;

    let headers = {
      Authorization: this.rest.getAuth(),
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    let body;
    if (this.body) body = JSON.stringify(this.body);

    let res = await fetch(url, {
      method: this.method,
      headers,
      body,
    });

    return await res.json();
  }
}

module.exports = APIRequest;
