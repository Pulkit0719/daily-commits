const fs = require("fs");
const path = require("path");

const timestamp = new Date().toISOString();
const message = `Daily activity recorded at ${timestamp}\n`;

fs.writeFileSync(path.join(__dirname, "temp.txt"), message);
console.log(message.trim());
