const weth = artifacts.require("./WETH.sol");
module.exports = function(deployer,accounts) {
    deployer.deploy(weth);
};

//contract address: 0xC4698941f8B7a6dAFc1d2583Ac8818439353E35c