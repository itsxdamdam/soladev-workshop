import { Connection, Keypair, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js';

import walletKey from './wallet.json' assert { type: "json" }

import { AirdropCoins } from './airdrops.js';

const to = new PublicKey('FMQ8C1i54fvedewRUDZntQSWtGkZX7jPcSrPdMS7rt5X');
const from = Keypair.fromSecretKey(new Uint8Array(walletKey))

const connection = new Connection("https://api.devnet.solana.com", "confirmed")
console.log({ to, from });

const transfer = async() => {
  const balance = await connection.getBalance(from.publicKey);

  console.log({balance})

  let shouldAirDrop = false

  if(balance  === 0) {
    console.log("OGA YOU DON'T HAVE MONEY");
    shouldAirDrop = await AirdropCoins()
    if(!shouldAirDrop) return
  } 
  
  console.log(airDrop)
  
  // else {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: balance
      })
    )

    transaction.feePayer = from.publicKey;

    const recentBlockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = recentBlockhash.blockhash;

    const fee = 
      (
        await connection.getFeeForMessage(
        transaction.compileMessage(),
        "confirmed"
        )
      ).value || 0;
      
      transaction.instructions.pop()

      transaction.add(
        SystemProgram.transfer({
          fromPubkey: from.publicKey,
          toPubkey: to,
          lamports: balance - fee
        })
      );

      const send = await sendAndConfirmTransaction(connection, transaction, [
        from,
      ]);

      console.log({send})
  // }

}

transfer()

// console.log({to, from})