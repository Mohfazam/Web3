const crypto  = require("crypto");

function StartWithPrefix(prefix){
    let input = 0;

    while(true){
        let inputString = input.toString();
        const hash = crypto.createHash("sha256").update(inputString).digest("hex");

        if(hash.startsWith(prefix)){
            return { input: inputString, hash: hash}
        }

        input++;
    }
}


const result  = StartWithPrefix('00000');
console.log(`Input: ${result.input} \n hash: ${result.hash}`)