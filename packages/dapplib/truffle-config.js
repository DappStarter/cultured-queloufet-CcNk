require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind concert grace gloom tail slush'; 
let testAccounts = [
"0xb745717ac8d4976567d6956b8154b5321afc6ef646ae62e79fb57e53d3076183",
"0x57762b6a516d6799a127265e039a17c18e0061b8ca1e22f1e87a228d08927018",
"0x7f0f3ce06d19cf96c9ae0030d2134893a5c6a7d578982c9c16a1dc1706f76ccf",
"0x04cbef3e96690a11f6b2aa7ecc51b46c84c5f4ee4fe40f142e32db9bd5c7c2b2",
"0x362f25a2737dd82eee1b41e8614c8b4c7a6b54585e6105b0d3067095b69c30d7",
"0x4a74b858c9c56ce4be394861fa133f722ebd5e2ad35e17ac0e5801e8e94d8360",
"0x0f28eec0099d127ec1a3303e115d0ad077c9101f6ca2ea6d9295c2d1d6f69d0d",
"0xefa8642386dcad002e96446c4d8b4ff30d388e46fe52879c92132e92596871fa",
"0xe7c7001f60056c42a7a8e04a61769e6e0cc5b3059fe43eb8e9f1d6165365d4d8",
"0x1255b2dc2f34aed363bc5251cc4664517ec2531a90265be4ba93ae0a5d3fdd67"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


