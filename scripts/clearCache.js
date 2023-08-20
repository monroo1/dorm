const path = require("path");
const fs = require("fs");

function clearCache() {
	fs.rm(
		path.join(__dirname, "..", "node_modules", ".cache"),
		{ recursive: true },
		(err) => {
			if (err) {
				throw err;
			}
		},
	);
}

clearCache();
