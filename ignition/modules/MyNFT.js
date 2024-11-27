// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const tokenName = "VolcanoToken";
const tokenSymbol = "VTC";

module.exports = buildModule("MyNFTModule", (m) => {
  const name = m.getParameter("_name", tokenName);
  const symbol = m.getParameter("_symbol", tokenSymbol);

  const nft = m.contract("MyNFT", [name, symbol]);

  return { nft };
});
