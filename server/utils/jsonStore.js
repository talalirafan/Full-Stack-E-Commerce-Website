const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "data");

function filePath(fileName) {
  return path.join(dataDir, fileName);
}

function readData(fileName) {
  const raw = fs.readFileSync(filePath(fileName), "utf-8");
  return JSON.parse(raw || "[]");
}

function writeData(fileName, data) {
  fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2), "utf-8");
}

module.exports = { readData, writeData };
