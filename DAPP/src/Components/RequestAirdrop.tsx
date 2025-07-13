import { useWallet } from "@solana/wallet-adapter-react";

export const RequestAirdrop = () => {

    const wallet = useWallet();

    function requestAirdrop() {
        alert("Hello");
    }

    return (
        <div className="flex flex-col">
                <input className="border-8 p-4 m-4" type="text" placeholder="Amount.." />
            <button onClick={requestAirdrop} className="border-4 p-2 mb-4 bg-amber-300 hover:cursor-pointer">Request AirDrop</button>
            <strong>{wallet.publicKey?.toBase58()}</strong>
        </div>
    )
}