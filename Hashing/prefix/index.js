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




// ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDHl0fDHwmlt7tLC8ADiYrGktaWfQYJ3dzp1PvsNIXi/RQl8icY6ZBJiU58nuZF2pKSMYxVdsb8/tU/nFeMlUumwTg8CjNNZNA6TMQ0fuOdE44H+8o5kxSje4wLI40KU6NGNN3492mdJ18ILdWLmGtAX/HVDtM9vUHTekFoJs21yw75Y4ce/NwBnx1btarkOXZl89RiT9cwKCdAkOlDm4+kTdn94NJ3ugD9EseFxTgQlTpEWdxTba0Wtc+CvYenidemUtMhmm3rHX5PZWBYyjlNzNc62AhtA4CuRjzBtwBLJBgMuWR65WH8qkvQg977PhdsKaikSsTxtcz0IVy10haEToOHbzm0HL11G2zj6XcdP8zKPdRhtH86/+X2nDBz4ZEWDgDu7miuBg9M1jMvy3391IXECT+55dffjW0xhnmLRQ1pGLwd0hFc3oXYxxMMCgO47Fs/K6VC3xFPE/60pDptMP4iUaBVeemmQLFW7NKaM6UzKz1gHPBuNJvWHF0QkU0= root@LAPTOP-KS8MIDP7
