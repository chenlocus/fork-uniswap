const TestToken = artifacts.require("./aaa.sol");
module.exports = function(deployer,accounts) {
    deployer.deploy(TestToken);
};

//contract address: 0x3d0C74fcedE4dd878BEEee69db689fd00A22F56a