import { Keypair } from '@solana/web3.js'

const wallet = Keypair.generate()

const publicKey = wallet.publicKey.toBase58();


export const generateKey = () => {
  const wallet = Keypair.generate()

  const publicKey = wallet.publicKey.toString();

  const privateKey = wallet.secretKey;

  return {
    publicKey,
    privateKey
  }; 
}


console.log(generateKey());


// {
//   publicKey: 'CyEBsnRSrtK7s4G1rCZoe3yts3SAmV7eHo3VeMbCaqeP',
//   privateKey: '91,164,53,47,192,217,31,74,230,43,155,132,27,137,6,54,221,187,147,185,95,213,121,114,255,154,77,114,139,229,238,141,177,215,254,31,41,150,65,161,172,229,236,194,239,236,24,198,33,211,52,30,82,223,238,185,47,88,140,218,12,208,134,208'
// }