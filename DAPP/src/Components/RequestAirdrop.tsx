import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
export const RequestAirdrop = () => {

    const [amount, setAmount] = useState(0);

    const wallet = useWallet();
    const { connection } = useConnection();

    function requestAirdrop() {
        const publicKey = wallet.publicKey;
        if(!publicKey) return;
        connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
    }

    return (
        <div className="flex flex-col">
                <input onChange={(e) => setAmount((Number(e.target.value)))} className="border-8 p-4 m-4" type="text" placeholder="Amount.." />
            <button onClick={requestAirdrop} className="border-4 p-2 mb-4 bg-amber-300 hover:cursor-pointer">Request AirDrop</button>
            <strong>{wallet.publicKey?.toBase58()}</strong>
            <strong>{amount}</strong>
        </div>
    )
}