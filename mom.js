const TronWeb = require('tronweb');
const fs = require('fs');
const CryptoUtils = require("@tronscan/client/src/utils/crypto");
const TransactionUtils = require("@tronscan/client/src/utils/transactionBuilder")
const BigNumber = require('bignumber.js');
const colors = require('colors');

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
const privateKey = '96f76a53f81ac9358cb00514327f93b246b02f242bd4e103a088793c8b260c1d';
const _address = 'TJL4NiesLoS5D8NqiYFYL1rU8DSRZHdoK9';

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
tronWeb.setAddress(_address);

const MOM_Address = "TANLfiE2otahQPyyjJjCzQRCJ255jzmQz2";

const VOX_Address = 'TAQ2SN5bMWXyF6eZgNEQsFoVSXwxpcaNWN';
const TUB_Address = 'TDD2inwW6EyJkwgmYmzsdSvN3ohNzL2Mxq'; 
const TAP_Address = 'TK4RaF7gjaMtBCZjNE684crV9NnSAo3Xsw';

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

const _Mom = {
    "Mom": {
    "address":  tronWeb.address.toHex(MOM_Address),
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tub","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vox","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tap","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"tub_","type":"address"},{"name":"tap_","type":"address"},{"name":"vox_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":true,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":true,"name":"guy","type":"address"},{"indexed":true,"name":"foo","type":"bytes32"},{"indexed":true,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"setCap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setMat","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setTax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setAxe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"setTubGap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pip_","type":"address"}],"name":"setPip","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pep_","type":"address"}],"name":"setPep","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"vox_","type":"address"}],"name":"setVox","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"setTapGap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setWay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ray","type":"uint256"}],"name":"setHow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

var iMom = tronWeb.contract(_Mom["Mom"].abi, _Mom["Mom"].address);

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
    Mom = !!MOM_Address ? await loadContract(MOM_Address) : await deployContract('SaiMom', TUB_Address, TAP_Address, VOX_Address );  
 
    Mom.setCap(web3.utils.toWei("100000000")).send({
            shouldPollResponse: true,
            callValue: 0, 
            from : _address
        }).then(function (res) {
            console.log( "setCap ", res);

        }).catch(function (err) {
            console.log(err)
    });

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
