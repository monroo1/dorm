const path = require("path");
const fs = require("fs");

function clearCache() {
  const pathCache = path.resolve(__dirname, "..", "node_modules", ".cache");

  // console.log(pathCache);
  fs.stat(pathCache, (err) => {
    if (!err) {
      fs.rm(pathCache, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }
      });
    } else {
      console.log("кэша нет!");
    }
  });
}

clearCache();
