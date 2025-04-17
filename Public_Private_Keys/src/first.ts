import * as ed from "@noble/ed25519"

async function main(){
    try{
        const privateKey = ed.utils.randomPrivateKey();

    const message = new TextEncoder().encode("Hello BOts");

    const publicKey = await ed.getPublicKeyAsync(privateKey);

    const signature = await ed.signAsync(message, privateKey);

    const isValid = await ed.verifyAsync(signature, message, publicKey);

    console.log(isValid);
    } catch(e){
        console.log("Something wrong: " + e);
    }
}


main();