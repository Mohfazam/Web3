import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export const SendToken = () => {
    const [amount, setAmount] = useState(0);
    const [sender, setSender] = useState("");
    
    
    const wallet = useWallet();
    const {connection} = useConnection();
    
    async function sendToken() {
        const publickey = wallet.publicKey;

        if(!publickey) return;

        const transaction  = new Transaction();

        transaction.add(SystemProgram.transfer({
            fromPubkey: publickey,
            toPubkey: new PublicKey(sender),
            lamports: amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection);

        alert("Set " + amount +  "SOL to " + sender);

    }


    return(
        <div>
           <input type="text" placeholder="To" onChange={(e) => setSender(e.target.value)}/>

           <input type="Text" placeholder="Amount" onChange={(e) => setAmount(Number(e.target.value))}/>

           <button className="p-2 m-2 w-22 rounded-lg bg-yellow-400 border-4 hover:cursor-pointer" onClick={sendToken}>Send</button>
        </div>
    )
}