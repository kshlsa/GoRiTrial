const gori = artifacts.require("GoRi");

module.exports = async function(deployer) {
  // deploy a contract
  await deployer.deploy(gori);
  //access information about your deployed contract instance
  const instance = await gori.deployed();
}