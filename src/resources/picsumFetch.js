const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const url = "https://picsum.photos/v2/list?page=4";

async function GetData(url) {
  let data = await fetch(url).then(response => {
    return response.json();
  });
  fs.writeFileSync(path.resolve(__dirname, "picture_library.json"), JSON.stringify(data));

}

GetData(url);
