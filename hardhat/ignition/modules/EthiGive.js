const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("EthiGiveModule", (m) => {


  const lock = m.contract("EthiGive");

  return { lock };
});
