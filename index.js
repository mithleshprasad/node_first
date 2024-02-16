const fs = require("fs");
console.warn("hello world");

const textin = fs.readFileSync("./input.txt").toString();

console.warn(textin);

const txtout = `hello everyone mithlesh this side this is my 1st node project : ${textin} \n createdon ${Date.now()}`;

fs.writeFileSync("./output.txt", txtout);

console.warn(txtout);
