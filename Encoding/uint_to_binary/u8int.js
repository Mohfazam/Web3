let bytes = new Uint8Array([65, 65, 65, 65]);
console.log(bytes);

console.log(new TextDecoder().decode(bytes));