const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = require("web3");
const fs = require('fs');
const path = require("path");


const MNEMONIC = fs.readFileSync("../firefox.log").toString().trim();


const TAO_CONTRACT_ADDRESS = "0xe90535809b1E2E0e8c1472f756E0F69De9b56ffe";
const OWNER_ADDRESS = "0x69014c23846436b1A1991200Ac7da9Bc7BeF14DE";
const MUMBAI = "https://matic-mumbai.chainstacklabs.com";

//0xb5505a6d998549090530911180f38aC5130101c6

//*Parse the contract artifact for ABI reference.
let rawdata = fs.readFileSync(path.resolve(__dirname, "../build/contracts/Tao.json"));
let contractAbi = JSON.parse(rawdata);
const TAO_ABI = contractAbi.abi;

async function main() {

  try {
    //*define web3, contract and wallet instances
    const provider = new HDWalletProvider(
      MNEMONIC,
      MUMBAI
    );

    const web3Instance = new web3(provider);

    const taoContract = new web3Instance.eth.Contract(
      TAO_ABI,
      TAO_CONTRACT_ADDRESS
    );


      //* just mint 
    await taoContract.methods
      .updateChildChainManager('0xb5505a6d998549090530911180f38aC5130101c6')
      .send({ from: OWNER_ADDRESS }).then(console.log('updateChildChainManager!')).catch(error => console.log(error))
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
