import * as ed from "@noble/ed25519";

async function main(){
    const privateKey = ed.utils.randomPrivateKey();
    console.log("Private key:", privateKey);

    const message = new TextEncoder().encode("Hello, World");
 
    const pubKey = await ed.getPublicKey(privateKey);

    const signature = await ed.signAsync(message, privateKey);

    const isValid = await ed.verifyAsync(signature, message, pubKey);
}

main();