const { copyFileSync } = require("fs");

copyFileSync("package.json", "build/package.json");
copyFileSync("README.md", "build/README.md");
