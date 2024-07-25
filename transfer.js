import { Connection, Keypair, PublicKey } from '@solana/web3.js';

import walletKey from './wallet.json' assert { type: "json" }

const to = new PublicKey('FMQ8C1i54fvedewRUDZntQSWtGkZX7jPcSrPdMS7rt5X');
const from = Keypair.fromSecretKey(new Uint8Array(walletKey))

const connection = new Connection("https://api.devnet.solana.com", "confirmed")

const transfer = async => {
  const balance = connection.getBalance(from.publicKey);

}

console.log(transfer())

// console.log({to, from})