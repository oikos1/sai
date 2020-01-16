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
const privateKey = '31ca7245cd48254df2d08eb9ac28cb0e941e5f9145586193655b17f51a9d6f26';
const _address = 'TEsk263pdTwFgXEC2oqCuVoxwTgGVhqrDJ';


const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
tronWeb.setAddress(_address);

const TubTest_Address = 'TEmkdzC74oMisxKYtZ65UatoiJaweKjrJP';
const tVox_Address = 'TRvykTB2Q1aWiUTZsxY3DbBJZDxPjFnbSC';

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


const _TubTest = {
    "TubTest": {
    "address":  tronWeb.address.toHex(TubTest_Address),
    //{"name":"_gem","type":"address"},{"name":"_gov","type":"address"},{"name":"_sai","type":"address"},{"name":"_sin","type":"address"},{"name":"_skr","type":"address"},{"name":"_pip","type":"address"},{"name":"_pep","type":"address"},{"name":"_dad","type":"address"},{"name":"_vox","type":"address"},{"name":"_tub","type":"address"}
    "abi":[{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"authority_","type":"address"}],"name":"setAuthority","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"failed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"authority","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"IS_TEST","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"x","type":"uint256"},{"indexed":false,"name":"y","type":"uint256"}],"name":"Debug","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sig","type":"bytes4"},{"indexed":false,"name":"guy","type":"address"},{"indexed":false,"name":"foo","type":"bytes32"},{"indexed":false,"name":"bar","type":"bytes32"},{"indexed":false,"name":"wad","type":"uint256"},{"indexed":false,"name":"fax","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"authority","type":"address"}],"name":"LogSetAuthority","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"LogSetOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"exact","type":"bool"}],"name":"eventListener","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes"}],"name":"logs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes32"}],"name":"log_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"address"}],"name":"log_named_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"bytes32"}],"name":"log_named_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"int256"},{"indexed":false,"name":"decimals","type":"uint256"}],"name":"log_named_decimal_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"uint256"},{"indexed":false,"name":"decimals","type":"uint256"}],"name":"log_named_decimal_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"int256"}],"name":"log_named_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"uint256"}],"name":"log_named_uint","type":"event"},{"constant":false,"inputs":[],"name":"setUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testFailTurnAgain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testPie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testPer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testTag","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testGap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testAsk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testBid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testJoin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testExit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testCage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testFlow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const _tVox = {
    "tVox": {
    "address":  tronWeb.address.toHex(tVox_Address),
    "abi":[{"constant":true,"inputs":[],"name":"failed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"IS_TEST","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address"},{"indexed":false,"name":"exact","type":"bool"}],"name":"eventListener","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes"}],"name":"logs","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes32"}],"name":"log_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"address"}],"name":"log_named_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"bytes32"}],"name":"log_named_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"int256"},{"indexed":false,"name":"decimals","type":"uint256"}],"name":"log_named_decimal_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"uint256"},{"indexed":false,"name":"decimals","type":"uint256"}],"name":"log_named_decimal_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"int256"}],"name":"log_named_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"key","type":"bytes32"},{"indexed":false,"name":"val","type":"uint256"}],"name":"log_named_uint","type":"event"},{"constant":false,"inputs":[{"type":"address","name":"addr"}],"name":"setUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxDefaultPar","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxDefaultWay","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxCoax","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxProd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxProdAfterWarp1day","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxParAfterWarp1day","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"testVoxProdAfterWarp2day","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}  
};

const TubTest = tronWeb.contract(_TubTest["TubTest"].abi, _TubTest["TubTest"].address);

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

    //deploy
    !!TubTest_Address ? await loadContract(TubTest_Address) : await deployContract('TubTest' );
    !!tVox_Address ? await loadContract(tVox_Address) : await deployContract('VoxTest' );

    TubTest.Debug().watch((err, {result}) => {
        if (err) return console.error('Failed to bind event listener:', err);
        console.log("Debug : " + JSON.stringify(result));

    }); 

/*
                'TCw74sCgyP3zC1VcYcUH6dpRNCWkePGJRV',
                'TTgzYCevE5RHHNumhhpz7aPRwFa1UdjuoT', 
                'TWCPp3CKSBvXReDXP2gkQdzdy8KkKosBgd', 
                'TPT3Us6DsFuUSecaVkbDLUupBzfFzAZgf3', 
                'TQEYTvA5kma2P9ShAixyNfB1GApvWzoNbe', 
                'TSQQS98i7MUoNsVcMCx2uDDMUeC2PTpNrs', 
                'TK6hdLFASTxZzP5Urg5a48PEPiwpDvP934',
                'TR29s6MscJVPkVwDH5mtRT3hrV9co6Gtpu',
                'TTjBjDxnue6jvecLkKXd2WogP5uhpdGLoY',
                'TRcNwdXmzoYLVoqRUPcAq4EzzzV3U1PNvQ'
*/
/*
    TubTest.setUp(
                ).send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test setup ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });  
*/
/*
    TubTest.testPie().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Pie ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });
*/
/*
    TubTest.testPer().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Per ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });
    */
/*    
    TubTest.testTag().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test tag ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });
*/
/* 
   TubTest.testGap().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Gap ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    }); 
*/
/*
   TubTest.testAsk().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Ask ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });      
*/
/*       TubTest.testBid().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Bid ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });   
*/    
/*       
   TubTest.testJoin().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Join ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });      
*/
/*
   TubTest.testExit().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Exit ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });  
*/
/*
   TubTest.testCage().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Cage ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });    
*/     
    TubTest.testFlow().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {
                console.log("Test Flow ", res)
                //console.log( "tVox : " , CryptoUtils.getBase58CheckAddress(   hexStr2byteArray(res))  );

            }).catch(function (err) {

                console.log(err)
               //console.log(tronWeb.toAscii(err.output.resMessage)   )
    });             
/*
        tVox.setUp('TJFe8BbJizAnj385NTYKAw2MUaWWroRad7').send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( res );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )

        });
*/
/*
        tVox.testVoxDefaultPar().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( " testVoxDefaultPar : " , res  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
        }); 
         
        tVox.testVoxDefaultWay().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( " testVoxDefaultWay : " , res  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
        });  

        tVox.testVoxCoax().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( " testVoxCoax : " , res  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
        });   
        /*tVox.testVoxProd().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( " testVoxProd : " , res  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
        });          

        tVox.testVoxProdAfterWarp1day().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( " testVoxProdAfterWarp1day : " , res  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
        });   
        tVox.testVoxProdAfterWarp2day().send({
                shouldPollResponse: true,
                callValue: 0, 
                from : _address
            }).then(function (res) {

                console.log( " testVoxProdAfterWarp2day : " , res  );

            }).catch(function (err) {

                console.log(err)
                //console.log(tronWeb.toAscii(err.output.resMessage)   )
        });   

         */
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
