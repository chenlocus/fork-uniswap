const Router =artifacts.require("./SwapRouter.sol")

module.exports = async function(deployer) {
	const FACTORY_ADDRESS ='0xc14f686cAf918ef11ff700dF50E9494cE0cbE6EE',
		  WETH_ADDRESS ='0xC4698941f8B7a6dAFc1d2583Ac8818439353E35c';
	await deployer.deploy(Router,FACTORY_ADDRESS,WETH_ADDRESS);

};

//contract address: 0x3E83c1389eF608C47A9Eb70D0f3A964Bad3209b2