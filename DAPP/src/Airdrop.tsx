import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser(){
        //@ts-ignore
        await connection.requestAirdrop(wallet.publicKey, 1000000000);
        alert("Airdropped SOL");
    }

    return <div>
        <input type="number" placeholder="Amount" />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}