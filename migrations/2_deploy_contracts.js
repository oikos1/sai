const BigNumber = require('bignumber.js');
var MyContract = artifacts.require("./Fab.sol");
const web3 = require('web3');
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//(new BigNumber(10000000).multipliedBy(1e+18)).toString(10)
module.exports = function(deployer) {
//return deployer.deploy(MyContract);
return deployer.deploy(MyContract, 'MyTRC20', 'MyTRC20', 18, (new BigNumber(10000000).multipliedBy(1e+18)).toString(10), {from: "TRtNpmW7WMgzvAxiudYaF1JnxXxrKfMHM4", value:100000000000});


 
};
