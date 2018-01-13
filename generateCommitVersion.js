const fs = require("fs");
const path = require("path");

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8")
);

const now = new Date();
const timeStr = now.toISOString().replace(/:|T|\.|-/g, "");
// .slice(0, 8);
const commitVersion = `${packageJson.version}-dev.${timeStr}`;

console.log(commitVersion);

const updatedPackageJson = {
  ...packageJson,
  version: commitVersion
};

fs.writeFileSync(
  path.join(__dirname, "dist", "package.json"),
  JSON.stringify(updatedPackageJson, undefined, 2),
  "utf8"
);
