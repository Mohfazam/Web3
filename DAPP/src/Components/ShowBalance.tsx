import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";

export const ShowBalance = () => {

    const [balance, setBalance] = useState(0);

    const wallet  = useWallet();
    const publicKey = wallet.publicKey;

    const {connection} = useConnection(); 

    const getUserBalance = async () => {

        if(!publicKey) return;

        try{
            const bal = await connection.getBalance(publicKey);
            const solBal = bal / 1_000_000_000;
        setBalance(() => solBal)
        alert("Balance Fetched Successfully");
        } catch(e){
            alert("Something went wrong: " + e);
        }
    }

    return(
        <div>
            <div>
                <button className="border-4 p-2 m-2 hover:cursor-pointer" onClick={getUserBalance}>Fetch Balance</button>
            </div>

            <h3>The Balance of the user is: 
                <strong>{balance}</strong>
            </h3>

        </div>
    )
}