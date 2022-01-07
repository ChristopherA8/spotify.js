(async () => {
  const { Client } = require("../src");

  const client = new Client(
    "BQCR0IJUid4wdr_OhHS3O_ds__lmeICLrTexhrot_GhlejtQuMCIoY522b3QJZTip0h712Un4lBWbCGjDTtk8tZBhJuqe0cW7ntthqYnbF8Mn24BBr6ZIuYeEH1KDyRc3cSO4Sqy2vs06ptIlfIi7CsEwX7YkCaUDGUcLWtgDlzwBfSGdipt6dIvkRltkni8Y_sBDyFXzKMBIn6WjT_HOBeJRAr1aWaq7GjdMRxiYp69xPw3gb2-Umn3"
  );
  console.log(await client.rest.request("GET", "/me"));
})();
