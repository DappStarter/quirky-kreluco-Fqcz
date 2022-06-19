require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name remember sister pulse install bread slot genuine'; 
let testAccounts = [
"0x69d8dfebd37b1ff8af431998a6a2ac5c4a806f646b1c6fcfac9019215f4fb55b",
"0x2a58a62888749e4efc1a89674bbdb97b784c5f000bfae7cc21659e4c24b48603",
"0xe6a55603ddce139a7e659a5c1a174b0904fbcde8d54abd9497769d34039c8ba1",
"0x30a0a9451d6fb2a4b2fe9821014900fef72733f50c9b9bad2d3dce9fed195453",
"0x7b2cf8df4aa307fd2c48a02bfd5d94933c6afcc52738d48486063bdecd616afb",
"0x33c3f226628defb7f5760e6cd696c19dcb5af5b7c920e1185870dcee0a189d54",
"0x7eed5e4239e97a1a7121f3352cc1f2f946aa727560e2997b72ab7ec6e9f89b05",
"0xaa2ba4d34d6c7f78965f6d75a9a0b2c9179ec8cd0c1f50012c0fab2b83c3451d",
"0x1ae4a3053e26823153e1620efeea7ec11dff63291627501e72fd727aa597f9e0",
"0xb97f878c97afc84c0d0e9c6e4b4660b886f0afe6573ee89d37954e03fb097f8e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

