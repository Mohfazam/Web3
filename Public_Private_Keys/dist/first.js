var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as ed from "@noble/ed25519";
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const privateKey = ed.utils.randomPrivateKey();
            const message = new TextEncoder().encode("Hello BOts");
            const publicKey = yield ed.getPublicKeyAsync(privateKey);
            const signature = yield ed.signAsync(message, privateKey);
            const isValid = yield ed.verifyAsync(signature, message, publicKey);
            console.log(isValid);
        }
        catch (e) {
            console.log("Something wrong: " + e);
        }
    });
}
main();
