const path = require("path");


const HDWalletProvider = require('truffle-hdwallet-provider')
const privateKey = process.env.PRIVATE_KEY

module.exports = {

  contracts_build_directory: path.join(
    __dirname,
    "../licium-webapp/src/assets/contracts"
  ),

  networks: {

    develop: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    bloxberg: {
      provider: new HDWalletProvider(privateKey, 'https://core.bloxberg.org'),
      //host: "https://core.bloxberg.org",
     // port: 443, // Standard Ethereum port (default: none)
      network_id: '*',
      production: true,
      //gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 200000000000,  // 200 gwei (default: 100 gwei)
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
