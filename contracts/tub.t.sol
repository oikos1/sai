/// tub.t.sol -- Unit tests for tub.sol

pragma solidity ^0.4.18;

import './tub.sol';
import './tap.sol';
import './guard.sol';
import "./test.sol";

contract TubTest is DSTest, DSThing {
    address tap;
    SaiTub  tub;
    SaiVox  vox;

    DSGuard dad;

    DSValue pip;
    DSValue pep;

    DSToken sai;
    DSToken sin;
    DSToken skr;
    DSToken gem;
    DSToken gov;

    event Debug(uint x, uint y);

    function setUp() public {
        sai = new DSToken("SAI");
        sin = new DSToken("SIN");
        skr = new DSToken("SKR");
        gem = new DSToken("GEM");
        gov = new DSToken("GOV");
        pip = new DSValue();
        pep = new DSValue();
        dad = new DSGuard();
        vox = new SaiVox(RAY);
        tub = new SaiTub(sai, sin, skr, gem, gov, pip, pep, vox, 0x123);
        tap = 0x456;
        tub.turn(tap);

        //Set whitelist authority
        skr.setAuthority(dad);

        //Permit tub to 'mint' and 'burn' SKR
        dad.permit(tub, skr, bytes4(keccak256('mint(address,uint256)')));
        dad.permit(tub, skr, bytes4(keccak256('burn(address,uint256)')));

        //Allow tub to mint, burn, and transfer gem/skr without approval
        gem.approve(tub);
        skr.approve(tub);
        sai.approve(tub);

        gem.mint(6000000 sun);

        //Verify initial token balances
        assertEq(gem.balanceOf(this), 6000000 sun);
        assertEq(gem.balanceOf(tub), 0 sun);
        assertEq(skr.totalSupply(), 0 sun);

        assert(!tub.off());
    }

    function testFailTurnAgain() public {
        tub.turn(0x789);
    }

    function testPie() public {
        assertEq(tub.pie(), gem.balanceOf(tub));
        assertEq(tub.pie(), 0 sun);
        gem.mint(75000000 sun);
        tub.join(72000000 sun);
        assertEq(tub.pie(), gem.balanceOf(tub));
        assertEq(tub.pie(), 72000000 sun);
        emit Debug(tub.pie(), 72000000 sun);

    }

    function testPer() public {
        tub.join(5000000 sun);
        emit Debug(skr.totalSupply(), 5000000 sun);
        assertEq(skr.totalSupply(), 5000000 sun);
        assertEq(tub.per(), rdiv(5000000 sun, 5000000 sun));
    }

    function testTag() public {
        tub.pip().poke(bytes32(1000000 sun));
        assertEq(tub.pip().read(), bytes32(1000000 sun));
        assertEq(wmul(tub.per(), uint(tub.pip().read())), tub.tag());
        tub.pip().poke(bytes32(5000000 sun));
        assertEq(tub.pip().read(), bytes32(5000000 sun));
        assertEq(wmul(tub.per(), uint(tub.pip().read())), tub.tag());
    }

    function testGap() public {

        tub.mold('gap', WAD );
        assertEq(tub.gap(), WAD);

        //Debug(2000000000000000000, WAD);

        tub.mold('gap', 2000000000000000000 );
        assertEq(tub.gap(), 2000000000000000000);

        //assertEq(tub.gap(), 2000000 sun);
        
        tub.mold('gap', wmul(WAD, 1000000000000000000 ));
        
        //Debug(tub.gap(), wmul(WAD, 10000000 sun));

        assertEq(tub.gap(), wmul(WAD, 1000000000000000000 ));
    }

    function testAsk() public {
        assertEq(tub.per(), RAY);
        assertEq(tub.ask(3000000 sun), rmul(3000000 sun, wmul(RAY, tub.gap())));
        assertEq(tub.ask(wmul(WAD, 33)), rmul(wmul(WAD, 33), wmul(RAY, tub.gap())));
    }

    function testBid() public {
        assertEq(tub.per(), RAY);
        assertEq(tub.bid(4000000 sun), rmul(4000000 sun, wmul(tub.per(), sub(2 * WAD, tub.gap()))));
        assertEq(tub.bid(wmul(5000000 sun,3333333)), rmul(wmul(5000000 sun,3333333), wmul(tub.per(), sub(2 * WAD, tub.gap()))));
    }

    function testJoin() public {
        tub.join(3 sun);
        assertEq(gem.balanceOf(this), 3000000 sun);
        assertEq(gem.balanceOf(tub), 3000000 sun);
        assertEq(skr.totalSupply(), 3000000 sun);
        tub.join(1 sun);
        assertEq(gem.balanceOf(this), 2000000 sun);
        assertEq(gem.balanceOf(tub), 4000000 sun);
        assertEq(skr.totalSupply(), 4000000 sun);
    }

    function testExit() public {
        gem.mint(10000000 sun);
        assertEq(gem.balanceOf(this), 16000000 sun);

        tub.join(12000000 sun);
        assertEq(gem.balanceOf(tub), 12000000 sun);
        assertEq(gem.balanceOf(this), 4000000 sun);
        assertEq(skr.totalSupply(), 12000000 sun);

        tub.exit(3000000 sun);
        assertEq(gem.balanceOf(tub), 9000000 sun);
        assertEq(gem.balanceOf(this), 7000000 sun);
        assertEq(skr.totalSupply(), 9000000 sun);

        tub.exit(7000000 sun);
        assertEq(gem.balanceOf(tub), 2000000 sun);
        assertEq(gem.balanceOf(this), 14000000 sun);
        assertEq(skr.totalSupply(), 2000000 sun);
    }

    function testCage() public {
        tub.join(5000000 sun);
        assertEq(gem.balanceOf(tub), 5000000 sun);
        assertEq(gem.balanceOf(this), 1000000 sun);
        assertEq(skr.totalSupply(), 5000000 sun);
        assert(!tub.off());

        tub.cage(tub.per(), 5000000 sun);
        assertEq(gem.balanceOf(tub), 0 sun);
        assertEq(gem.balanceOf(tap), 5000000 sun);
        assertEq(skr.totalSupply(), 5000000 sun);
        assert(tub.off());
    }

    function testFlow() public {
        tub.join(1000000 sun);
        tub.cage(tub.per(), 1000000 sun);
        assert(tub.off());
        assert(!tub.out());
        tub.flow();
        assert(tub.out());
    }
}