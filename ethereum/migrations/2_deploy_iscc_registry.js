const ISCCRegistry = artifacts.require("ISCCRegistry");

module.exports = function(deployer) {
  deployer.deploy(ISCCRegistry);
};
