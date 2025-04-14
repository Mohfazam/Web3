const crypto = require("crypto");

const input = "sareofvwar";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log("Hash For Sarwar is: " + hash);