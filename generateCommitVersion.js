const fs = require("fs");
const path = require("path");

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "package.json"), "utf8")
);

const commitVersion = `${packageJson.version}-${process.env.TRAVIS_COMMIT}`;

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
