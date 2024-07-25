"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const umi_bundle_defaults_1 = require("@metaplex-foundation/umi-bundle-defaults");
const umi_1 = require("@metaplex-foundation/umi");
const umi = (0, umi_bundle_defaults_1.createUmi)("https://api.devnet.solana.com");
const signer = (0, umi_1.generateSigner)(umi);
console.log({ skey: signer.secretKey });
const mint = (0, umi_1.generateSigner)(umi);
const authority = (0, umi_1.generateSigner)(umi);
// const sig = await createV1(umi, {
//   mint,
//   authority: umi.identity,
//   name: "SLD",
//   uri: "www.google.com",
//   sellerFeeBasisPoints: percentAmount(3.5),
//   tokenStandard: TokenStandard.FungibleAsset
// })
console.log({ mint: mint.publicKey });
