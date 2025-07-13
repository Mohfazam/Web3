import {createMint, getMinimumBalanceForRentExemptMint} from "@solana/spl-token";
import {Transaction, SystemProgram} from "@solana/web3.js";
export function TokenLaunchpad() {

    async function createToken(){
        const lamports = await getMinimumBalanceForRentExemptMint(connection);
        
            const transaction = new Transaction().add(
                SystemProgram.createAccount({
                    fromPubkey: payer.publicKey,
                    newAccountPubkey: keypair.publicKey,
                    space: MINT_SIZE,
                    lamports,
                    programId,
                }),
                createInitializeMint2Instruction(keypair.publicKey, decimals, mintAuthority, freezeAuthority, programId),
            );
        
            await sendAndConfirmTransaction(connection, transaction, [payer, keypair], confirmOptions);
    }

    return  <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }}>
        <h1>Solana Token Launchpad</h1>
        <input className='inputText' type='text' placeholder='Name'></input> <br />
        <input className='inputText' type='text' placeholder='Symbol'></input> <br />
        <input className='inputText' type='text' placeholder='Image URL'></input> <br />
        <input className='inputText' type='text' placeholder='Initial Supply'></input> <br />
        <button className='btn' onClick={createToken}>Create a token</button>
    </div>
}