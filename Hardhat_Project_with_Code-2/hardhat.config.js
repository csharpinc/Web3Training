/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox")
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/{API-Key}",    // rpc url
      accounts: [
        `0x${"{private-key}"}`    //account's private key containing MATIC
      ],
    }
  }
};