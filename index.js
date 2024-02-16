const fs = require("fs");
console.warn("hello world");

const textin = fs.readFileSync("./input.txt").toString(); // Convert buffer to string
console.warn(textin);
