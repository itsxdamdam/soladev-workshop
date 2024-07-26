import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'

// import { generateKey } from './keygen.js';

import walletKey from '../wallet.json' assert {type: 'json'}


export const AirdropCoins = async () => {

  const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

  const myAddress = Keypair.fromSecretKey(new Uint8Array(walletKey)).publicKey.toBase58(); // generate public key from private key

  console.log({myAddress})

  const myAddressPublicKey = new PublicKey(myAddress); //verify a keypair ensuring public matches secret

  const signature = await connection.requestAirdrop(myAddressPublicKey, LAMPORTS_PER_SOL * 0.4) // receiving sol through airdrops

  console.log(signature);

  const res = await connection.TransactionConfirmStrategy(signature);

  console.log({res})
  // return !res.value.err
}

AirdropCoins()