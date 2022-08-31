const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = require("web3");
const fs = require('fs');
const path = require("path");


const MNEMONIC = fs.readFileSync("../firefox.log").toString().trim();


const FACTORY_CONTRACT_ADDRESS = "0xc14f686cAf918ef11ff700dF50E9494cE0cbE6EE";
const OWNER_ADDRESS = "0x69014c23846436b1A1991200Ac7da9Bc7BeF14DE";
const MUMBAI = "https://matic-mumbai.chainstacklabs.com";


//*Parse the contract artifact for ABI reference.
let rawdata = fs.readFileSync(path.resolve(__dirname, "../build/contracts/UniswapV3Factory.json"));
let contractAbi = JSON.parse(rawdata);
const FACTORY_ABI = contractAbi.abi;

async function main() {

  try {
    //*define web3, contract and wallet instances
    const provider = new HDWalletProvider(
      MNEMONIC,
      MUMBAI
    );

    const web3Instance = new web3(provider);

    const factoryContract = new web3Instance.eth.Contract(
      FACTORY_ABI,
      FACTORY_CONTRACT_ADDRESS
    );


    //var calldata = await web3Instance.eth.abi.encodeParameter('uint256','00000000000000000001')

    await factoryContract.methods
      .createPool('0x1a49492C832020A708937ed554e5657064f4cA5A','0xB78908B675773489DcBdD7a42f1AADDcc8b15a77','500')
      .send({ from: OWNER_ADDRESS }).then(console.log('pool created!')).catch(error => console.log(error))
  }
  
  catch (e) {
    console.log(e)
  }
}

//invoke
main().then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
