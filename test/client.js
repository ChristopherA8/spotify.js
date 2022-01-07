(async () => {
  const { Client } = require("../src");

  const client = new Client(
    "[Redacted]"
  );
  console.log(await client.rest.request("GET", "/me"));
})();
