import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export function Airdrop() {
    const { connection } = useConnection();
    const [balance, setBalance] = useState(0);
    const wallet = useWallet();

    const [amount, setAmount] = useState(1);

    useEffect(() => {
        fetchBalance();
    }, [balance])

    async function sendAirdropToUser() {
        if (!wallet.publicKey) {
            alert("Please connect your wallet");
            return;
        }

        try {
            const lamports = amount * LAMPORTS_PER_SOL;

            const sig = await connection.requestAirdrop(wallet.publicKey, lamports);

            // Await confirmation using 'processed' for speed
            const latestBlockhash = await connection.getLatestBlockhash();
            await connection.confirmTransaction(
                {
                    signature: sig,
                    ...latestBlockhash,
                },
                "processed"
            );

            console.log("Signature:", sig);
            alert("✅ Airdrop successful!\nSignature: " + sig);
        } catch (err) {
            console.error("Airdrop failed:", err);
            alert("❌ Airdrop failed:\n" + err.message);
        }
    }

    async function fetchBalance(){
        const address = wallet.publicKey?.toString
        const lamports = await connection.getBalance(address);
        setBalance(lamports / LAMPORTS_PER_SOL);
    }

    return (
        <div style={{ padding: "1rem", fontFamily: "monospace" }}>
            <input
                type="number"
                placeholder="Amount in SOL"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                step="0.1"
                min="0.01"
            />
            <p>Wallet Address: {wallet.publicKey?.toBase58()}</p>
            <p>Balance: {balance}</p>
            <button onClick={sendAirdropToUser}>🚀 Send Airdrop</button>
        </div>
    );
}
