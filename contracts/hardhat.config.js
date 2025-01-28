
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/7dd9c9bd7e6c41088d46d88628e07eb4",
      accounts: ["0x4e1cc1c561e53a69f1d875128ac715d554db5f3e5f197dbc9f81db62cd920b7d"]
    }
  }
};