const Factory = artifacts.require("./UniswapV3Factory.sol");
module.exports = async function(deployer) {
    await deployer.deploy(Factory);
    const factory = await Factory.deployed();
    // let token1Address = '0x1a49492C832020A708937ed554e5657064f4cA5A',
    //     token2Address ='0xB78908B675773489DcBdD7a42f1AADDcc8b15a77';
    // await factory.createPool(token1Address,token2Address,1);
};
//contract address:    0xc14f686cAf918ef11ff700dF50E9494cE0cbE6EE