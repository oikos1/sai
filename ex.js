const TronWeb = require('tronweb');
const fs = require('fs');
const CryptoUtils = require("@tronscan/client/src/utils/crypto");
const TransactionUtils = require("@tronscan/client/src/utils/transactionBuilder")
const BigNumber = require('bignumber.js');
const colors = require('colors');
var Web3EthAbi = require('web3-eth-abi');
//let abiSignature = Web3EthAbi.encodeFunctionSignature('setPip(address)')

const loadArtifact = name => {
    return JSON.parse(fs.readFileSync(`./build/contracts/${name}.json`));
};

const web3 = require('web3');

const HttpProvider = TronWeb.providers.HttpProvider;
// Full node http endpoint
const fullNode = new HttpProvider("http://192.168.0.102:9090");
// Solidity node http endpoint
const solidityNode = new HttpProvider("http://192.168.0.102:9090");
// Contract events http endpoint
const eventServer = "http://192.168.0.102:9090";

// update with your private key here
const privateKey = '31ca7245cd48254df2d08eb9ac28cb0e941e5f9145586193655b17f51a9d6f26';
const _address = 'TEsk263pdTwFgXEC2oqCuVoxwTgGVhqrDJ';

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
tronWeb.setAddress(_address);
 
const GEM_FAB_Address = '';
const VOX_FAB_Address = '';
const TUB_FAB_Address = '';
const TAP_FAB_Address = '';
const TOP_FAB_Address = '';
const MOM_FAB_Address = '';
const DAD_FAB_Address = '';

const SAI_GOV_Address = 'TTgzYCevE5RHHNumhhpz7aPRwFa1UdjuoT';
const SAI_GEM_Address = 'TCw74sCgyP3zC1VcYcUH6dpRNCWkePGJRV';
const SAI_PIP_Address = 'TSQQS98i7MUoNsVcMCx2uDDMUeC2PTpNrs';
const SAI_PEP_Address = 'TK6hdLFASTxZzP5Urg5a48PEPiwpDvP934';
const SAI_PIT = '0x0000000000000000000000000000000000000123';

const SAI_IOU_Address = 'TPjZPBn8eDzi83X6BcwFyRZhoUYyKx8JZG';
const SAI_ADM_Address = 'TTKXWrJhjbRCV8Ft1biwQYg3xrwUvGnFjf';

const MOM_Address = "TRfWhu31embNDEe3XY6hDtJvK4cLAXTmVU";
const DAD_Address = 'TTzTebCHVPaJYdVVva6fTkab7Bw8qKUw82'; 

const SAI_Address = 'TWCPp3CKSBvXReDXP2gkQdzdy8KkKosBgd';
const SIN_Address = 'TPT3Us6DsFuUSecaVkbDLUupBzfFzAZgf3';
const SKR_Address = 'TQEYTvA5kma2P9ShAixyNfB1GApvWzoNbe';

const DAI_FAB_Address = '';

const VOX_Address = 'TTjBjDxnue6jvecLkKXd2WogP5uhpdGLoY';

//console.log("415adca215d0b6e07002cd8d05dcf1c83d5a0b4d66", tronWeb.address.toHex(VOX_Address));

const TUB_Address = 'TPXAS493pZhTN5gjmXMJqdWTPJJAmmVge7'; 
const TAP_Address = 'TGpHgKk4cbaANBxYqwKPjVqyKC9HUzwqhT';
const TOP_Address = 'TWRvKpkctkktm1oNzqTMwYEUwKRxLce3rM';

const tVox_Address = 'TF9bUuLneQYgQfWSY5P62bQA77KCdTMVSA';
const SaiTest_Address = 'TGYuGe7ErmrZ7ctqjd32QiJCe1nC2QdNYm';


const deployContract = async (name, ...args) => {
    const Contract = loadArtifact(name);

    const contractInstance = await tronWeb.contract().new({
        abi: Contract.abi,
        bytecode: Contract.bytecode,
        feeLimit: 1000000000,
        callValue: 0,
        userFeePercentage: 100,
        from : _address,
        parameters: args
    });

    const address = tronWeb.address.fromHex(contractInstance.address);
    console.log(
        `Contract ${name} Deployed: address: ${address}, hexAddress: ${contractInstance.address}`
    );
    return contractInstance;
};

const loadContract = async address => {
    return await tronWeb.contract().at(address);
};


const _GemFab = {
    "GemFab": {
    "address":  tronWeb.address.toHex(GEM_FAB_Address),
    "abi":[{"constant":true,"inputs":[],"name":"momFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"skr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tubFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tub","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mom","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tapFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dad","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dadFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"topFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"voxFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sai","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gemFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"step","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"top","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"gemFab_","type":"address"},{"name":"voxFab_","type":"address"},{"name":"tubFab_","type":"address"},{"name":"tapFab_","type":"address"},{"name":"topFab_","type":"address"},{"name":"momFab_","type":"address"},{"name":"dadFab_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[],"name":"makeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gem","type":"address"},{"name":"gov","type":"address"},{"name":"pip","type":"address"},{"name":"pep","type":"address"},{"name":"pit","type":"address"}],"name":"makeVoxTub","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"makeTapTop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"configParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"verifyParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"authority","type":"address"}],"name":"configAuth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _VoxFab = {
    "VoxFab": {
    "address":  tronWeb.address.toHex(VOX_FAB_Address),
    "abi":[{"constant":false,"inputs":[],"name":"newVox","outputs":[{"name":"vox","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _TubFab = {
    "TubFab": {
    "address":  tronWeb.address.toHex(TUB_FAB_Address),
    "abi":[{"constant":false,"inputs":[{"name":"sai","type":"address"},{"name":"sin","type":"address"},{"name":"skr","type":"address"},{"name":"gem","type":"address"},{"name":"gov","type":"address"},{"name":"pip","type":"address"},{"name":"pep","type":"address"},{"name":"vox","type":"address"},{"name":"pit","type":"address"}],"name":"newTub","outputs":[{"name":"tub","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _DaiFab = {
    "DaiFab": {
    "address":  tronWeb.address.toHex(DAI_FAB_Address),
    "abi":[{"constant":true,"inputs":[],"name":"momFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"skr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tubFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tub","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mom","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tapFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dad","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dadFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"topFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"voxFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sai","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gemFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"step","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"top","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"gemFab_","type":"address"},{"name":"voxFab_","type":"address"},{"name":"tubFab_","type":"address"},{"name":"tapFab_","type":"address"},{"name":"topFab_","type":"address"},{"name":"momFab_","type":"address"},{"name":"dadFab_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[{"name":"_vox","type":"address"},{"name":"_tub","type":"address"}],"name":"setVoxTub","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tap","type":"address"},{"name":"_top","type":"address"}],"name":"setTapTop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"s","type":"string"}],"name":"S","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"configParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"verifyParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"authority","type":"address"}],"name":"configAuth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _MomFab = {
    "MomFab": {
    "address":  tronWeb.address.toHex(MOM_FAB_Address),
    "abi":[{"constant":false,"inputs":[{"name":"tub","type":"address"},{"name":"tap","type":"address"},{"name":"vox","type":"address"}],"name":"newMom","outputs":[{"name":"mom","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _DadFab = {
    "DadFab": {
    "address":  tronWeb.address.toHex(DAD_FAB_Address),
    "abi":[{"constant":true,"inputs":[],"name":"momFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"skr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tubFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tub","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mom","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tapFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dad","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dadFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"topFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"voxFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sai","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gemFab","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"step","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"top","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"gemFab_","type":"address"},{"name":"voxFab_","type":"address"},{"name":"tubFab_","type":"address"},{"name":"tapFab_","type":"address"},{"name":"topFab_","type":"address"},{"name":"momFab_","type":"address"},{"name":"dadFab_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[],"name":"makeTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_vox","type":"address"},{"name":"_tub","type":"address"}],"name":"setVoxTub","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"gem","type":"address"},{"name":"gov","type":"address"},{"name":"pip","type":"address"},{"name":"pep","type":"address"},{"name":"pit","type":"address"}],"name":"makeVoxTub","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tap","type":"address"},{"name":"_top","type":"address"}],"name":"setTapTop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"makeTapTop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"s","type":"string"}],"name":"S","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"configParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"verifyParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"authority","type":"address"},{"name":"_mom","type":"address"},{"name":"_dad","type":"address"}],"name":"configAuth","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};


const _SaiIOU = {
    "SaiIOU": {
    "address":  tronWeb.address.toHex(SAI_IOU_Address),
    "abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}] }  
};

const _Tub = {
    "Tub": {
    "address":  tronWeb.address.toHex(TUB_Address),
    "abi": [{"constant":true,"inputs":[],"name":"sin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"skr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gov","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rho","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cupi","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"axe","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"off","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gem","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sai","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tax","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"mat","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pep","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"out","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pip","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pit","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"cups","outputs":[{"name":"lad","type":"address"},{"name":"ink","type":"uint256"},{"name":"art","type":"uint256"},{"name":"ire","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"sai_","type":"address"},{"name":"sin_","type":"address"},{"name":"skr_","type":"address"},{"name":"gem_","type":"address"},{"name":"gov_","type":"address"},{"name":"pip_","type":"address"},{"name":"pep_","type":"address"},{"name":"vox_","type":"address"},{"name":"pit_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pro","type":"uint256"},{"indexed":false,"name":"con","type":"uint256"},{"indexed":false,"name":"min","type":"uint256"}],"name":"Safe","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"lad","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Draw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"cup","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"lad","type":"address"},{"indexed":false,"name":"ink","type":"uint256"},{"indexed":false,"name":"art","type":"uint256"},{"indexed":false,"name":"ire","type":"uint256"}],"name":"Lock","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"lad","type":"address"},{"indexed":false,"name":"cup","type":"bytes32"}],"name":"LogNewCup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":false,"name":"guy","type":"address"},{"indexed":false,"name":"foo","type":"bytes32"},{"indexed":false,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":true,"inputs":[{"name":"cup","type":"bytes32"}],"name":"lad","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"cup","type":"bytes32"}],"name":"ink","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"}],"name":"tab","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"}],"name":"rap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"din","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"air","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"pie","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"era","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"param","type":"bytes32"},{"name":"val","type":"uint256"}],"name":"mold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pip_","type":"address"}],"name":"setPip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pep_","type":"address"}],"name":"setPep","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"vox_","type":"address"}],"name":"setVox","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"tap_","type":"address"}],"name":"turn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"per","outputs":[{"name":"ray","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"wad","type":"uint256"}],"name":"ask","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"wad","type":"uint256"}],"name":"bid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"join","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"chi","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"rhi","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"drip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tag","outputs":[{"name":"wad","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"}],"name":"safe","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"open","outputs":[{"name":"cup","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"},{"name":"guy","type":"address"}],"name":"give","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"},{"name":"wad","type":"uint256"}],"name":"lock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"},{"name":"wad","type":"uint256"}],"name":"free","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"},{"name":"wad","type":"uint256"}],"name":"draw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"},{"name":"wad","type":"uint256"}],"name":"wipe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"}],"name":"shut","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"cup","type":"bytes32"}],"name":"bite","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fit_","type":"uint256"},{"name":"jam","type":"uint256"}],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"flow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _Tap = {
    "Tap": {
    "address":  tronWeb.address.toHex(TAP_Address),
    "abi":[{"constant":true,"inputs":[],"name":"sin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"skr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tub","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"off","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"gap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"sai","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tub_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":true,"inputs":[],"name":"joy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"woe","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fog","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"param","type":"bytes32"},{"name":"val","type":"uint256"}],"name":"mold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"heal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"s2s","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"bid","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"ask","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"bust","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"boom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"fix_","type":"uint256"}],"name":"cage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"cash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mock","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"vent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _Vox = {
    "Vox": {
    "address":  tronWeb.address.toHex(VOX_Address),
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"how","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fix","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tau","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"par_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":true,"inputs":[],"name":"era","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"param","type":"bytes32"},{"name":"val","type":"uint256"}],"name":"mold","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"par","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"way","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"tell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"tune","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"prod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _Mom = {
    "Mom": {
    "address":  tronWeb.address.toHex(MOM_Address),
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tub","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tub_","type":"address"},{"name":"tap_","type":"address"},{"name":"vox_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"setCap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setMat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setTax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setAxe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"setTubGap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pip_","type":"address"}],"name":"setPip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pep_","type":"address"}],"name":"setPep","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"vox_","type":"address"}],"name":"setVox","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"setTapGap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setWay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setHow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _Dad = {
    "Dad": {
    "address":  tronWeb.address.toHex(DAD_Address),
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ANY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"bytes32"},{"indexed":true,"name":"dst","type":"bytes32"},{"indexed":true,"name":"sig","type":"bytes32"}],"name":"LogPermit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"bytes32"},{"indexed":true,"name":"dst","type":"bytes32"},{"indexed":true,"name":"sig","type":"bytes32"}],"name":"LogForbid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":true,"inputs":[{"name":"src_","type":"address"},{"name":"dst_","type":"address"},{"name":"sig","type":"bytes4"}],"name":"canCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"sig","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"bytes32"},{"name":"dst","type":"bytes32"},{"name":"sig","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"sig","type":"bytes32"}],"name":"forbid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"bytes32"},{"name":"dst","type":"bytes32"},{"name":"sig","type":"bytes32"}],"name":"forbid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _Skr = {
    "Skr": {
    "address":  tronWeb.address.toHex(SKR_Address),
    "abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_symbol","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

//const _Gem = {
//    "Gem": {
//    "address":  tronWeb.address.toHex(SAI_GEM_Address),
//    "abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_symbol","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
//};

const _Gem = {
    "Gem": {
        "address": tronWeb.address.toHex(SAI_GEM_Address),
        "abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
    }
}

const _Sai = {
    "Sai": {
    "address":  tronWeb.address.toHex(SAI_Address),
    "abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_symbol","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _Sin = {
    "Sin": {
    "address":  tronWeb.address.toHex(SIN_Address),
    "abi":[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"start","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"src","type":"address"},{"name":"guy","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_symbol","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _SaiPip = {
    "SaiPip": {
    "address":  tronWeb.address.toHex(SAI_PIP_Address),
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"indexes","outputs":[{"name":"","type":"bytes12"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"next","outputs":[{"name":"","type":"bytes12"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes12"}],"name":"values","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"has","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"min","outputs":[{"name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"val","type":"bytes32"}],"name":"LogValue","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[{"name":"wat","type":"address"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pos","type":"bytes12"},{"name":"wat","type":"address"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"min_","type":"uint96"}],"name":"setMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next_","type":"bytes12"}],"name":"setNext","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wat","type":"address"}],"name":"unset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pos","type":"bytes12"}],"name":"unset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"void","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"poke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"peek","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"read","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"compute","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]}  
};

const _SaiPep = {
    "SaiPep": {
    "address":  tronWeb.address.toHex(SAI_PEP_Address),
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"indexes","outputs":[{"name":"","type":"bytes12"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"next","outputs":[{"name":"","type":"bytes12"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes12"}],"name":"values","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"has","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"min","outputs":[{"name":"","type":"uint96"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"val","type":"bytes32"}],"name":"LogValue","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[{"name":"wat","type":"address"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pos","type":"bytes12"},{"name":"wat","type":"address"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"min_","type":"uint96"}],"name":"setMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"next_","type":"bytes12"}],"name":"setNext","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wat","type":"address"}],"name":"unset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pos","type":"bytes12"}],"name":"unset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"void","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"poke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"peek","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"read","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"compute","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}]}  
};

const _tVox = {
    "tVox": {
    "address":  tronWeb.address.toHex(tVox_Address),
    "abi":[{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"failed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"__par","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"IS_TEST","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"exact","type":"bool"}],"name":"eventListener","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes"}],"name":"logs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes32"}],"name":"log_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"address"}],"name":"log_named_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"bytes32"}],"name":"log_named_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"int256"},{"indexed":false,"name":"decimals","type":"uint256"}],"name":"log_named_decimal_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"uint256"},{"indexed":false,"name":"decimals","type":"uint256"}],"name":"log_named_decimal_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"int256"}],"name":"log_named_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"uint256"}],"name":"log_named_uint","type":"event"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"setUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxDefaultPar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxDefaultWay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxCoax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxProd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxProdAfterWarp1day","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxParAfterWarp1day","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxProdAfterWarp2day","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

/*
const GemFab = tronWeb.contract(_GemFab["GemFab"].abi, _GemFab["GemFab"].address);
const MomFab = tronWeb.contract(_MomFab["MomFab"].abi, _MomFab["MomFab"].address);
const DadFab = tronWeb.contract(_DadFab["DadFab"].abi, _DadFab["DadFab"].address);

const DaiFab = tronWeb.contract(_DaiFab["DaiFab"].abi, _DaiFab["DaiFab"].address);
const VoxFab = tronWeb.contract(_VoxFab["VoxFab"].abi, _VoxFab["VoxFab"].address);
const TubFab = tronWeb.contract(_TubFab["TubFab"].abi, _TubFab["TubFab"].address);
*/
const SaiIOU = tronWeb.contract(_SaiIOU["SaiIOU"].abi, _SaiIOU["SaiIOU"].address);
const SaiPip = tronWeb.contract(_SaiPip["SaiPip"].abi, _SaiPip["SaiPip"].address);
const SaiPep = tronWeb.contract(_SaiPep["SaiPep"].abi, _SaiPep["SaiPep"].address);


const Tub = tronWeb.contract(_Tub["Tub"].abi, _Tub["Tub"].address);
const Tap = tronWeb.contract(_Tap["Tap"].abi, _Tap["Tap"].address);
const Vox = tronWeb.contract(_Vox["Vox"].abi, _Vox["Vox"].address);
const Mom = tronWeb.contract(_Mom["Mom"].abi, _Mom["Mom"].address);
const Dad = tronWeb.contract(_Dad["Dad"].abi, _Dad["Dad"].address);
const Skr = tronWeb.contract(_Skr["Skr"].abi, _Skr["Skr"].address);
const Gem = tronWeb.contract(_Gem["Gem"].abi, _Gem["Gem"].address);
const Sai = tronWeb.contract(_Sai["Sai"].abi, _Sai["Sai"].address);
const Sin = tronWeb.contract(_Sin["Sin"].abi, _Sin["Sin"].address);

const tVox = tronWeb.contract(_tVox["tVox"].abi, _tVox["tVox"].address);

/*const hotAddress = '';
const daiAddress = '';
const exchangeAddress = '';
const multiSigWalletAddress = '';*/

const waitSendResponse = async txID => {
    for (let i = 0; i < 100; i++) {
        console.log(`wait Transaction ${txID}`);
        res = await tronWeb.trx.getTransactionInfo(txID);

        if (res.id) {
            if (res.receipt.result === 'SUCCESS') {
                return res.contractResult;
            } else {
                throw `${res.receipt.result} ${JSON.stringify(res)}`;
            }
        }
        await new Promise(r => {
            setTimeout(r, 1000);
        });
    }
};

const run = async () => {

    //deploy-fab
/*  
    const GEM_FAB = !!GEM_FAB_Address ? await loadContract(GEM_FAB_Address) : await deployContract('GemFab');
    const VOX_FAB = !!VOX_FAB_Address ? await loadContract(VOX_FAB_Address) : await deployContract('VoxFab');
    const TUB_FAB = !!TUB_FAB_Address ? await loadContract(TUB_FAB_Address) : await deployContract('TubFab');
    const TAP_FAB = !!TAP_FAB_Address ? await loadContract(TAP_FAB_Address) : await deployContract('TapFab');
    const TOP_FAB = !!TOP_FAB_Address ? await loadContract(TOP_FAB_Address) : await deployContract('TopFab');
    const MOM_FAB = !!MOM_FAB_Address ? await loadContract(MOM_FAB_Address) : await deployContract('MomFab');
    const DAD_FAB = !!DAD_FAB_Address ? await loadContract(DAD_FAB_Address) : await deployContract('DadFab');
*/
    //deploy
    const SAI_GEM = !!SAI_GEM_Address ? await loadContract(SAI_GEM_Address) : await deployContract('WETH9', web3.utils.asciiToHex("ETH").padEnd(66, '0') ); // web3.utils.asciiToHex('SAI').padEnd(66, '0')
    const SAI_GOV = !!SAI_GOV_Address ? await loadContract(SAI_GOV_Address) : await deployContract('DSToken', web3.utils.asciiToHex("GOV").padEnd(66, '0')); // web3.utils.asciiToHex('SAI').padEnd(66, '0')  web3.utils.fromAscii(val)
    const SAI_PIP = !!SAI_PIP_Address ? await loadContract(SAI_PIP_Address) : await deployContract('DSValue');
    const SAI_PEP = !!SAI_PEP_Address ? await loadContract(SAI_PEP_Address) : await deployContract('DSValue');
//    const DAI_FAB = !!DAI_FAB_Address ? await loadContract(DAI_FAB_Address) : await deployContract('DaiFab', GEM_FAB_Address, VOX_FAB_Address, TUB_FAB_Address, TAP_FAB_Address, TOP_FAB_Address, MOM_FAB_Address, DAD_FAB_Address);  
 

    //STEP #1  
    //makeTokens()
    const SAI = !!SAI_Address ? await loadContract(SAI_Address) : await deployContract('DSToken', web3.utils.asciiToHex("DAI").padEnd(66, '0')); // web3.utils.asciiToHex('SAI').padEnd(66, '0')
    const SIN = !!SIN_Address ? await loadContract(SIN_Address) : await deployContract('DSToken', web3.utils.asciiToHex("SIN").padEnd(66, '0')); // web3.utils.asciiToHex('SAI').padEnd(66, '0')
    const skr = !!SKR_Address ? await loadContract(SKR_Address) : await deployContract('DSToken', web3.utils.asciiToHex("PETH").padEnd(66, '0')); // web3.utils.asciiToHex('SAI').padEnd(66, '0')
    
    //STEP #2  
    //makeVoxTub()
    const VOX = !!VOX_Address ? await loadContract(VOX_Address) : await deployContract('SaiVox', ray(750000000).toString() ); // web3.utils.asciiToHex('SAI').padEnd(66, '0')
    const TUB = !!TUB_Address ? await loadContract(TUB_Address) : await deployContract('SaiTub', SAI_Address, SIN_Address, SKR_Address, SAI_GEM_Address, SAI_GOV_Address, SAI_PIP_Address, SAI_PEP_Address, VOX_Address, SAI_PIT);    
    //!!tVox_Address ? await loadContract(tVox_Address) : await deployContract('VoxTest' );

    //PERMISSIONS
    const SAI_IOU_= !!SAI_IOU_Address ? await loadContract(SAI_IOU_Address) : await deployContract('DSToken',   web3.utils.asciiToHex("IOU").padEnd(66, '0') );
    const SAI_ADM = !!SAI_ADM_Address ? await loadContract(SAI_ADM_Address) : await deployContract('DSChief', SAI_GOV_Address, SAI_IOU_Address, 5 );
 


   Vox.setOwner(_address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Vox.setOwner ", res);
        }).catch(function (err) {
            console.log(err)
    });
    
    Tub.setOwner(_address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Tub.setOwner ", res);
        }).catch(function (err) {
            console.log(err)
    });

/*
    DaiFab.setVoxTub(VOX_Address,TUB_Address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
           
           // console.log(web3.utils.toAscii(res)) ;
           console.log("DaiFab.setVoxTub " , res);

        }).catch(function (err) {
            console.log(err)
    });
*/

    //STEP #3  
    //makeTapTop()
    const TAP = !!TAP_Address ? await loadContract(TAP_Address) : await deployContract('SaiTap', TUB_Address ); // web3.utils.asciiToHex('SAI').padEnd(66, '0') 


    Tub.turn(TAP_Address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Tub.turn " , res);
        }).catch(function (err) {
            console.log(err)
    });

 
    const TOP = !!TOP_Address ? await loadContract(TOP_Address) : await deployContract('SaiTop', TUB_Address, TAP_Address);

/*
    DaiFab.setTapTop(TAP_Address,TOP_Address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
           
            console.log("DaiFab.setTapTop " , res);

        }).catch(function (err) {
            console.log(err)
    });

*/
    const MOM = !!MOM_Address ? await loadContract(MOM_Address) : await deployContract('SaiMom', TUB_Address, TAP_Address, VOX_Address);
   
   Mom.setOwner(_address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Mom.setOwner ", res);
        }).catch(function (err) {
            console.log(err)
    });
    
    const DAD = !!DAD_Address ? await loadContract(DAD_Address) : await deployContract('DSGuard');  
   
   Dad.setOwner(_address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Dad.setOwner ", res);
        }).catch(function (err) {
            console.log(err)
    });
    
   Vox.setAuthority(DAD_Address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Vox.setAuthority ", res);
        }).catch(function (err) {
            console.log(err)
    });


    Vox.setOwner( _address ).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("Vox.setOwner " , res);
        }).catch(function (err) {
            console.log(err)
    });
 
 

/*
     DaiFab.configParams().send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
               
            // console.log(web3.utils.toAscii(res)) ;
            console.log("configParams " , res);
        }).catch(function (err) {
            console.log(err)
    });
*/
       
    /*DaiFab.verifyParams().send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
               
            // console.log(web3.utils.toAscii(res)) ;
            console.log("DaiFab.verifyParams " , res);

        }).catch(function (err) {
            console.log(err.red)
    });*/


/*
    DaiFab.configAuth(SAI_ADM_Address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
               
            // console.log(web3.utils.toAscii(res)) ;
            console.log("DaiFab.configAuth " , res);
        }).catch(function (err) {
            console.log(err)
    });
*/


    /*Gem.deposit().send({
            shouldPollResponse: true,
            callValue: 1000000000, 
            from : _address
        }).then(function (res) {
            console.log("GEM MINT : " + res );
        }).catch(function (err) {
            console.log(err)
    });*/
/*
    Gem.mint(_address, 1000000000000000).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("GEM MINT : " + res );
        }).catch(function (err) {
            console.log(err)
    });
*/

    /*DaiFab.S('setPip(address)').call({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("S :" + res);
        }).catch(function (err) {
            console.log(err)
    });
 
    Dad.forbid( "TRtNpmW7WMgzvAxiudYaF1JnxXxrKfMHM4", TUB_Address,   abiSignature.padEnd(66, '0') ).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("DAD PERMIT " + res);

        }).catch(function (err) {
            console.log(err)
    });

    Dad.canCall("TRtNpmW7WMgzvAxiudYaF1JnxXxrKfMHM4", TUB_Address,   abiSignature ).call({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log("DAD can call " + res);

        }).catch(function (err) {
            console.log(err)
    });


    Dad.LogPermit().watch((err, {result}) => {
        if (err) return console.error('Failed to bind event listener:', err);
        console.log("LOG PERMIT : " + JSON.stringify(result));

    });

    Dad.LogForbid().watch((err, {result}) => {
        if (err) return console.error('Failed to bind event listener:', err);
        console.log("LOG FORBID : " + JSON.stringify(result));

    });   



*/


    //========================================================================= SETTING PARAMETERS !!! IMPORTANT ==================================================================================================================================//
        var setParameters = function () { 

                /*tub.mold("cap", 0);
                tub.mold("mat", ray(1.5  ether));
                tub.mold("axe", ray(1.13 ether));

                tub.mold("fee", 1000000000158153903837946257);  // 0.5% / year
                tub.mold("tax", ray(1 ether));
                tub.mold("gap", 1 ether);

                tap.mold("gap", 0.97 ether);*/

                Tub.mold(web3.utils.asciiToHex('way').padEnd(66, '0'), 0).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from :_address
                    }).then(function (res) {
                        console.log("Tub.mold Way ", res);
                    }).catch(function (err) {
                        console.log(err)
                });

                const mat = ray(1500000000000000000 );
                //console.log("MAT : " + mat.toFixed());    

                Tub.mold(web3.utils.asciiToHex('mat').padEnd(66, '0'),  mat.toFixed()).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Tub.mold Mat ",res);
                    }).catch(function (err) {
                        console.log(err)
                });

                
                const axe = new BigNumber(  Math.pow(10,9) * 1130000000000000000 );
                //console.log("AXE : " + axe.toFixed());


                Tub.mold(web3.utils.asciiToHex('axe').padEnd(66, '0'), axe.toFixed()).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Tub.mold Axe ", res);
                    }).catch(function (err) {
                        console.log(err)
                });


                const tax = new BigNumber(  Math.pow(10, 9) * 1000000000000000000 );
                //console.log("TAX : " + tax.toFixed());      

                Tub.mold( web3.utils.asciiToHex('tax').padEnd(66, '0'),  tax.toFixed() ).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Tub.mold Tax ", res);
                    }).catch(function (err) {
                        console.log(err)
                });


                const fee = new BigNumber( "1000000000158153903837946257");

                Tub.mold( web3.utils.asciiToHex('fee').padEnd(66, '0'), fee.toFixed() ).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Tub.mold Fee ", res);
                    }).catch(function (err) {
                        console.log(err)
                }); 



                const tubGap = new BigNumber( "1000000000000000000" );


                Tub.mold( web3.utils.asciiToHex('gap').padEnd(66, '0'), tubGap.toFixed()).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Tub.mold Gap ",res);
                    }).catch(function (err) {
                        console.log(err)
                });


                const tapGap = new BigNumber( "970000000000000000");

                Tap.mold(web3.utils.asciiToHex('gap').padEnd(66, '0'), tapGap.toFixed()).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Tap.mold Gap ", res);
                    }).catch(function (err) {
                        console.log(err)
                });

                /*Tub.setPip(SAI_PIP_Address).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from: _address
                     }).then(function (res) {
                           
                        // console.log(web3.utils.toAscii(res)) ;
                        console.log("Set PIP : " + res);
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.setPep(SAI_PEP_Address).send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from: _address
                     }).then(function (res) {
                           
                        // console.log(web3.utils.toAscii(res)) ;
                        console.log("Set PEP : " + res);
                    }).catch(function (err) {
                        console.log(err)
                });*/

/*
                Gem.setName( "WTRX").send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Gem.setName " , res);
                    }).catch(function (err) {
                        console.log(err)
                });

                Sai.setName( "SAI").send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("Sai.setName ", res);
                    }).catch(function (err) {
                        console.log(err)
                });
*/
 
        }

    setParameters();
 
    var viewParameters = function() { 

                Tub.owner().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("Tub owner " +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) )) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.vox().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        
                        console.log("VOX " + CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) ));
             
                    }).catch(function (err) {
                        console.log(err)
                });


                /*DaiFab.tub().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        
                        console.log("TUB " +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) )) ;   

                    }).catch(function (err) {
                        console.log(err)
                });*/

                Vox.owner().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("Vox.owner " +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) )) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Vox.authority().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("Vox.authority " +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) )) ;   

                    }).catch(function (err) {
                        console.log(err)
                });   

                Tub.pep().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("PEP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );

                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.pip().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );

                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.cap().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("TUB CAP " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.mat().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;

                            mat = res;
                            console.log("TUB MAT " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                }); 

                Tub.axe().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("TUB AXE " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });


                Tub.tax().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from :_address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("TUB TAX " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.fee().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("TUB FEE " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });


                Tub.gap().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("TUB GAP " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                })

                Tap.gap().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                       // console.log(web3.utils.toAscii(res)) ;
                            console.log("TAP GAP " + res ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Vox.par().send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                            //console.log("par : ", res)
                            const v = new BigNumber( res.toString() );
                            console.log("VOX PAR : " + v.toFixed() ) ;   
 
                    }).catch(function (err) {
                        console.log(err)
                });


                Vox.how().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                            //console.log("how : ", res)
                            const v = new BigNumber( res.toString() );
                            console.log("VOX HOW : " + v.toFixed() ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Vox.way().send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                            console.log("way : ", res)
                            const v = new BigNumber( res.toString() );
                            console.log("VOX WAY : " + v.toFixed() ) ;   

                    }).catch(function (err) {
                        console.log(err)
                });

                Vox.fix().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //const v = new BigNumber( res.toString() );
                        console.log("VOX FIX : " + res ) ;   
             
                    }).catch(function (err) {
                        console.log(err)
                });        
                
                Tub.skr().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB SKR : " + CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)).yellow);
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.gem().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB GEM : " + CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)).yellow);
                    }).catch(function (err) {
                        console.log(err)
                });
                Tub.drip().send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB DRIP : " , res);
                    }).catch(function (err) {
                        console.log(err)
                });


                Tub.tag().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log("TUB TAG : " + JSON.stringify(res))
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        console.log("TUB TAG : " +  web3.utils.toBN(res.wad).toString().green );
                        tag = web3.utils.toBN(res.wad);


                    }).catch(function (err) {
                        console.log(err)
                });


               Tub.per().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        //console.log(res)
                        console.log("TUB PER : "  + (res.ray.toString() ).toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.gap().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB GAP : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.pie().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB PIE : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.air().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB AIR : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });


                Tub.din().send({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB DIN : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.rho().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB RHO : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });      

                Tub.era().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB ERA : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.off().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB OFF : "  + res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.fee().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB FEE : "  , res.toString().yellow );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.rum().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB RUM : "  , res );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });

                Tub.fit().call({
                        shouldPollResponse: true,
                        callValue: 0, 
                        from : _address
                    }).then(function (res) {
                        console.log("TUB FIT : "  , res );
                        //console.log("PIP : "  +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res)) );
                        //console.log(  web3.utils.fromWei(   res.wad.toString()  ) / Math.pow(10, 23)   );
                        //console.log( res.wad.toString());
                        //console.log( web3.utils.fromWei(  web3.utils.toBN( res.wad).toString() ) );
                    }).catch(function (err) {
                        console.log(err)
                });


                Tub.chi().send({
                            shouldPollResponse: true,
                            callValue: 0, 
                            from : _address
                        }).then(function (res) {
                            console.log("TUB CHI : " ,   res  );
                            //console.log(res)

                        }).catch(function (err) {
                            console.log(err)
                });


                Tub.rhi().send({
                            shouldPollResponse: true,
                            callValue: 0, 
                            from : _address
                        }).then(function (res) {
                            console.log("TUB RHI : " ,   res  );
                            //console.log(res)

                        }).catch(function (err) {
                            console.log(err)
                });

                Tub.tab("0x0000000000000000000000000000000000000000000000000000000000000001").send({
                            shouldPollResponse: true,
                            callValue: 0, 
                            from : _address
                        }).then(function (res) {
                            console.log("TUB tab cup : " ,   res  );
                            //console.log(res)

                        }).catch(function (err) {
                            console.log(err)
                });

    }

    viewParameters();

    var events = function() {

        Gem.Transfer().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            console.log("LOG transfer : " + JSON.stringify(result));

        });   
        Gem.Approval().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            console.log("LOG Gem Approval : " + JSON.stringify(result));

        });   
        Tub.Safe().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            console.log("LOG Safe : " + JSON.stringify(result));

        });   

        Skr.Mint().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            //console.log(result);
            console.log("SKR MINT : " + CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(result.guy )) )
        });

        Sai.Mint().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            //console.log(result);
            console.log("Sai MINT : " , result )
        });

        /*Tub.Debug().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            //console.log(result);
            if (result !== undefined)
            console.log("Tub Mold Debug : " ,result.x );
            console.log("title : ", web3.utils.toAscii( "0x" + result.title ));
        });*/

        Tub.LogNote().watch((err, {result}) => {
            if (err) return console.error('Failed to bind event listener:', err);
            //console.log(result);
            if (result !== undefined)
            console.log("Tub Log Note : " ,result );
            //console.log("title : ", web3.utils.toAscii( "0x" + result.title ));
        });
    }

    events();

    var balances = function() {


        Skr.balanceOf(tronWeb.address.toHex(_address)).call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("SKR balance : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });

        Gem.balanceOf(tronWeb.address.toHex(TUB_Address)).call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("GEM balance TUB : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });


        Gem.balanceOf(tronWeb.address.toHex(_address)).call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("GEM balance : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });

        Sai.balanceOf(tronWeb.address.toHex(_address)).call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("Sai balance : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });

        Sin.balanceOf(tronWeb.address.toHex(TAP_Address)).call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("Sin TAP balance : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });
        
        Sai.totalSupply().call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("Sai total supply : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });


        Skr.totalSupply().call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("SKR total supply : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });

        Gem.totalSupply().call({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) { 

                console.log("GEM total supply : " + res ); 

            }).catch(function (err) {
                console.log(err)
        });
    }

    balances();

/*
    
       Tub.open().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log("tub open ",  res );

            }).catch(function (err) {

                console.log(tronWeb.toUtf8(err.output.resMessage)   )
                //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });
        


        Gem.deposit().send({
                    fee_limit:1000000000,
                    shouldPollResponse: true,
                    callValue: 100, 
                    from : _address
                }).then(function (res) {

                    console.log("GEM deposit " , res );

                }).catch(function (err) {

                    console.log(err )
                    //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });  

        
        
        Tub.join(100).send({
                    fee_limit:1000000000,
                    shouldPollResponse: true,
                    callValue: 0, 
                    from : _address
                }).then(function (res) {

                    console.log("Tub.join ",  res );

                }).catch(function (err) {

                    console.log(err )
                    //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });

/*
        Tub.ask(1).call({
                    fee_limit:1000000000,
                    shouldPollResponse: true,
                    callValue: 0, 
                    from : _address
                }).then(function (res) {

                    console.log("Tub ask " , web3.utils.toBN(res._hex).toString().green );

                }).catch(function (err) {

                    console.log(err )
                    //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });
*/
/*
        Gem.approve(TUB_Address, 10000000).send({
                    fee_limit:1000000000,
                    shouldPollResponse: true,
                    callValue: 0, 
                    from : _address
                }).then(function (res) {

                    console.log("GEM approve " , res );

                }).catch(function (err) {

                    console.log(err )
                    //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });    
*/
/*        
       Tub.lock('0x0000000000000000000000000000000000000000000000000000000000000016', 100).send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log("CUP LOCK : " ,  res );

            }).catch(function (err) {

                console.log( tronWeb.toUtf8(err.output.resMessage ).toString().red   )
                //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });
        
       /*Tub.give('0x000000000000000000000000000000000000000000000000000000000000001e', "TYCFrUtWDvtgMBscBH8UVxiUHLEMsTWLdZ").send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log("CUP give : " ,  res );

            }).catch(function (err) {

                console.log( tronWeb.toUtf8(err.output.resMessage ).toString().red   )
                //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });*/
                
/*
       Tub.join(100).send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log("Tub join : " ,  res );

            }).catch(function (err) {

                console.log(tronWeb.toUtf8(err.output.resMessage)   )
                //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });
*/
/*
       Tub.cupi().call().then(next => {

            //for (var i=0; i< web3.utils.toDecimal(next) ; i++) {
                //console.log(i);
                Tub.cups( '0x0000000000000000000000000000000000000000000000000000000000000001' ).call().then(val => {
                    console.log("CUPS :" + JSON.stringify(val))

                }) ;  

                Tub.safe( '0x0000000000000000000000000000000000000000000000000000000000000001').send({
                            shouldPollResponse: true,
                            callValue: 0, 
                            from : _address
                        }).then(function (res) {

                            console.log("CUP SAFE : " +  res );

                            if (res) {

                                Tub.draw( '0x0000000000000000000000000000000000000000000000000000000000000001',   1 ).send().then(val => {

                                    console.log("cup draw : " + val );

                                }).catch(function (err) {
                                    console.log(res);
                                    console.log(tronWeb.toUtf8(err.output.resMessage)   )
                                    //console.log(tronWeb.toAscii(err.output.resMessage)   )
                                });  
                                //Tub.bite( '0x0000000000000000000000000000000000000000000000000000000000000001' ).send().then(val => {

                                //    console.log("cup draw : " + val );

                                //}).catch(function (err) {
                                //    console.log(res);
                                //    console.log(tronWeb.toUtf8(err.output.resMessage)   )
                                //    console.log(tronWeb.toAscii(err.output.resMessage)   )
                                //});  

                                

                            }

                        }).catch(function (err) {

                        console.log(err   )
                        //console.log(tronWeb.toAscii(err.output.resMessage)   )
                });

                Tub.ink( '0x0000000000000000000000000000000000000000000000000000000000000001' ).call().then(val => {

                        console.log("cup ink : " + val );
                });

                Tub.tab( '0x0000000000000000000000000000000000000000000000000000000000000001' ).send().then(val => {

                        console.log("cup tab : " + val );
                });  


            //}      
        }); 
 */      
/*    
    Gem.transferFrom(_address,TUB_Address, 1000000000000 ).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log( res );
        }).catch(function (err) {
            console.log(err)
    });
*/

/*
    Skr.transferFrom(_address,TUB_Address, 1000 ).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _addressnext
        }).then(function (res) {
            console.log( res );
        }).catch(function (err) {
            console.log(err)
    });*/

   /*Tub.open().send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {

            console.log( res );

        }).catch(function (err) {

            console.log(tronWeb.toUtf8(err.output.resMessage)   )
            //console.log(tronWeb.toAscii(err.output.resMessage)   )

    });*/
/*
   Tub.lock('0x0000000000000000000000000000000000000000000000000000000000000006', 10000000000).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {

            console.log("CUP LOCK : " +  res );

        }).catch(function (err) {

            console.log(tronWeb.toUtf8(err.output.resMessage)   )
            //console.log(tronWeb.toAscii(err.output.resMessage)   )

    });

   Tub.safe('0x0000000000000000000000000000000000000000000000000000000000000006').send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {

            console.log("CUP SAFE : " +  res );

        }).catch(function (err) {

            console.log(tronWeb.toUtf8(err.output.resMessage)   )
            //console.log(tronWeb.toAscii(err.output.resMessage)   )

    });

*/
/*
    Gem.approve(TUB_Address, 1000000).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {

            console.log( res );

        }).catch(function (err) {

            console.log(tronWeb.toUtf8(err.output.resMessage)   )
                        console.log(tronWeb.toAscii(err.output.resMessage)   )

    });

    Gem.Approval().watch((err, {result}) => {
        if (err) return console.error('Failed to bind event listener:', err);
        console.log("LOG Approval : " + JSON.stringify(result));

    });   


    Dad.LogForbid().watch((err, {result}) => {
        if (err) return console.error('Failed to bind event listener:', err);
        console.log("LOG FORBID : " + JSON.stringify(result));

    });   
*/
    /*Gem.transferFrom(_address,"TUv4o7BThn33YhgRRKSGKPpYuDsMgsrfKk", 1000000).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log( res );
        }).catch(function (err) {
            console.log(err)
    });
    /*DaiFab.tap().call({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            //console.log(res)
           // console.log(web3.utils.toAscii(res)) ;
                console.log("TAP " +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) ).yellow) ;   

        }).catch(function (err) {
            console.log(err)
    });

    DaiFab.top().call({
            shouldPollResponse: true,
            callValue: 0, 
            from :_address
        }).then(function (res) {
            //console.log(res)
           // console.log(web3.utils.toAscii(res)) ;
                console.log("TOP " +  CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) ).yellow) ;   

        }).catch(function (err) {
            console.log(err)
    });*/

/*

    SAI.setName( web3.utils.asciiToHex("Dai Stablecoin v1.0").padEnd(66, '0') ).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err)
    });

    SAI.name().call({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log(web3.utils.toAscii(res)) ;

        }).catch(function (err) {
            console.log(err)
    });

    DaiFab.vox().call({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log(res)
           // console.log(web3.utils.toAscii(res)) ;
                console.log( CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) )) ;   

        }).catch(function (err) {
            console.log(err)
    });

    DaiFab.tub().call({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log(res)
           // console.log(web3.utils.toAscii(res)) ;
                console.log( CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res) )) ;   

        }).catch(function (err) {
            console.log(err)
    });
*/


   /*SaiIOU.setOwner(SAI_ADM_Address).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err)
    });*/

    /*DaiFab.makeVoxTub( SAI_GEM_Address, SAI_GOV_Address, SAI_PIP_Address, SAI_PEP_Address, SAI_PIT ).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {

            console.log(res);

        }).catch(function (err) {
            console.log(err)
    }); */

    /*const hot = !!hotAddress
        ? await loadContract(hotAddress)
        : await deployContract('TestToken', 'HydroToken', 'Hot', 18);
    const dai = !!daiAddress
        ? await loadContract(daiAddress)
        : await deployContract('TestToken', 'DAI', 'DAI', 18);
    const exchange = !!exchangeAddress
        ? await loadContract(exchangeAddress)
        : await deployContract('HybridExchange', proxy.address, hot.address);

    const multiSigWallet = !!multiSigWalletAddress
        ? await loadContract(multiSigWalletAddress)
        : await deployContract('', proxy.address, hot.address);

    const proxyWhitelists = await proxy.getAllAddresses().call();

    // add whitelist
    if (
        proxyWhitelists.map(x => x.toLowerCase()).indexOf('0x' + exchange.address.slice(2)) === -1
    ) {
        await proxy
            .addAddress(tronWeb.address.fromHex(exchange.address))
            .send()
            .then(waitSendResponse);
        console.log('add Exchange into Proxy whitelist');
    // }*/
};

run();

var ray = function(wad) {
    return new BigNumber(wad * Math.pow(10, 9));
}
var wmul = function(_x,_y) {
    var ray = new BigNumber(10 ** 6);
     _x = new BigNumber(_x);
    _y = new BigNumber(_y);
    return new BigNumber((ray.dividedBy(2)).plus(_x.multipliedBy(_y)).dividedBy(ray)); 
}
        
var rmul = function(_x,_y) {
    var ray = new BigNumber(10 ** 27);
    _x = new BigNumber(_x);
    _y = new BigNumber(_y);
    return new BigNumber((ray.dividedBy(2)).plus(_x.multipliedBy(_y)).dividedBy(ray)); 
}

var wmul2 = function(_x,_y) {
    var ray = new BigNumber(10 ** 18);
    _x = new BigNumber(_x);
    _y = new BigNumber(_y);
    return new BigNumber((ray.dividedBy(2)).plus(_x.multipliedBy(_y)).dividedBy(ray)); 
}
const repeat = (x, n) => n > 0 ? new Array(n + 1).join(x) : ""
//const rpad = (x, y, n) => x + repeat(y, n - x.length)
const lpad = (x, y, n) => repeat(y, n - x.length) + x
const toHex = wad => new BigNumber(wad.replace(".", "")).toString(16)
const toBytes12 = (wad) => `0x${lpad(toHex(`${wad}`), "0", 24)}`
const toBytes32 = (wad) => `0x${lpad(toHex(`${wad}`), "0", 64)}`

//16进制的ASCII字符串转为byteArray格式。

//16进制的ASCII字符串转为byteArray格式。
function hexStr2byteArray(str) {
  var byteArray = Array();
  var d = 0;
  var j = 0;
  var k = 0;

  for (let i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (isHexChar(c)) {
      d <<= 4;
      d += hexChar2byte(c);
      j++;
      if (0 === (j % 2)) {
        byteArray[k++] = d;
        d = 0;
      }
    }
  }
  return byteArray;
}

/* Check if a char is hex char */
function isHexChar(c) {
  if ((c >= 'A' && c <= 'F') ||
      (c >= 'a' && c <= 'f') ||
      (c >= '0' && c <= '9')) {
    return 1;
  }
  return 0;
}
/* Convert a hex char to value */
function hexChar2byte(c) {
  var d = 0;
  if (c >= 'A' && c <= 'F') {
    d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
  }
  else if (c >= 'a' && c <= 'f') {
    d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
  }
  else if (c >= '0' && c <= '9') {
    d = c.charCodeAt(0) - '0'.charCodeAt(0);
  }
  return d;
}
