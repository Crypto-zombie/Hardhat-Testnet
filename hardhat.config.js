require("@nomicfoundation/hardhat-toolbox");
require('dotenv');
const { vars } = require('hardhat/config');

const BSCSCAN_API_KEY = vars.get("BSCSCAN_API_KEY");

console.log(process.env.PRIVATE_KEY);
/** @type import('hardhat/config').HardhatUserConfig */
const TestBSC_RPC_URL = "https://bsc-testnet-rpc.publicnode.com"
const Mainnet_RPC_URL = "";
module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {
    },
    bsc_testnet: {
      url: TestBSC_RPC_URL,
      chainId: 97,
      accounts: ["dd051ae595857e5367d2a847a51af70507756d89ca4233d1c6de366bdd7b556a"],
    }
  },
  etherscan: {
    apiKey: `${BSCSCAN_API_KEY}`
  }
};
