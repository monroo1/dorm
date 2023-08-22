const path = require("path");
const fs = require("fs");

function clearCache() {
	const pathCache = path.join(__dirname, "..", "node_modules", ".cache");

	if (pathCache) {
		fs.rm(
			pathCache,
			{ recursive: true },
			(err) => {
				if (err) {
					throw err;
				}
			},
		);
	}
}

clearCache();
