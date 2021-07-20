const Migrations = artifacts.require("Migrations");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  const instance = await Migrations.deployed();
};
