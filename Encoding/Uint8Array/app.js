// const str = "Hello World";
// const binaryRepresentation = new TextEncoder().encode(str);
// console.log(binaryRepresentation);

let y = 12;
// y.toString();
// console.log(y);
y.toString(16);
console.log(y.toString(16)); // 12 in hex is C
console.log(y.toString(16).padStart(2, "0")); // 12 in hex is 0C