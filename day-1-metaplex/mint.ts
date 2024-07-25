import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, percentAmount } from '@metaplex-foundation/umi';

import {
  createV1,
  TokenStandard,
} from '@metaplex-foundation/mpl-token-metadata'

const umi = createUmi("https://api.devnet.solana.com");
// const signer = generateSigner(umi)

// console.log({skey: signer.secretKey})

const secretArray = [
  228, 195, 164, 196, 194,  62, 146,  67,  22,  76, 195,
   90,  22, 151, 115,  77,   0,  49, 102, 140,  92, 129,
  199,  65,  82,  92,  15, 246, 206,  15,  45,   1,  99,
  131,  42, 176,  34,  58,  79,  45, 248, 207, 134,  63,
  122, 205,  23,  85, 116,  98, 190,  22,  96, 238, 216,
  196, 183,  89, 240, 158, 160,  92,  39, 173
]



const mint = generateSigner(umi);

const authority = generateSigner(umi);

// const sig = await createV1(umi, {
//   mint,
//   authority: umi.identity,
//   name: "SLD",
//   uri: "www.google.com",
//   sellerFeeBasisPoints: percentAmount(3.5),
//   tokenStandard: TokenStandard.FungibleAsset
// })

console.log({mint: mint.publicKey})