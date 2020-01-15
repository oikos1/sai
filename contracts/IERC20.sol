pragma solidity ^0.4.18;

interface IERC20 {

    function transferFrom(address src, address dst, uint wad)  external returns(bool);

}