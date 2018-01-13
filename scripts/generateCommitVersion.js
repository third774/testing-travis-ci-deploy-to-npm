const fs = require("fs");
const path = require("path");

const workingDirectory = process.env.PWD;

const packageJson = JSON.parse(
  fs.readFileSync(path.join(workingDirectory, "package.json"), "utf8")
);

const now = new Date();
const timeStr = now.toISOString().replace(/:|T|\.|-/g, "");
const commitVersion = `${packageJson.version}-dev.${timeStr}.${
  process.env.TRAVIS_COMMIT
}`;

console.log(commitVersion);

const updatedPackageJson = {
  ...packageJson,
  version: commitVersion
};

fs.writeFileSync(
  path.join(workingDirectory, "dist", "package.json"),
  JSON.stringify(updatedPackageJson, undefined, 2),
  "utf8"
);

fs.writeFileSync(
  path.join(workingDirectory, "package.json"),
  JSON.stringify(updatedPackageJson, undefined, 2),
  "utf8"
);
