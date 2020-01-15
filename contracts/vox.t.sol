pragma solidity ^0.4.18;

import "./test.sol";
import "./math.sol";
import './vox.sol';

contract TestWarp is DSNote {
    uint  _era;

    function TestWarp() public {
        _era = uint(now);
    }

    function era() public view returns (uint) {
        return _era == 0 ? now : _era;
    }

    function warp(uint age) public note {
        require(_era != 0);
        _era = age == 0 ? 0 : _era + age;
    }
}

contract DevVox is SaiVox, TestWarp {
    function DevVox(uint par_) SaiVox(par_) public {}
}

contract VoxTest is DSTest, DSMath {
    //DevVox vox;
    SaiVox vox;
    function wad(uint256 ray_) internal pure returns (uint256) {
        return wdiv(ray_, RAY);
    }

    function setUp(address addr) public {
//        vox = new DevVox(RAY);
        vox = SaiVox(addr);
    }
    function testVoxDefaultPar() public {
        assertEq(vox.par(), RAY);
    }
    function testVoxDefaultWay() public {
        assertEq(vox.way(), RAY);
    }
    function testVoxCoax() public {
        vox.mold('way', 999999406327787478619865402);  // -5% / day
        assertEq(vox.way(), 999999406327787478619865402);
    }
    function testVoxProd() public {
        vox.mold('way', 999999406327787478619865402);  // -5% / day
        vox.prod();
    }
    function testVoxProdAfterWarp1day() public {
        vox.mold('way', 999999406327787478619865402);  // -5% / day
        //vox.warp(1 days);
        vox.prod();
    }
    function testVoxParAfterWarp1day() public {
        vox.mold('way', 999999406327787478619865402);  // -5% / day
        //vox.warp(1 days);
        assertEq(wad(vox.par()), 9290 trx);
    }
    function testVoxProdAfterWarp2day() public {
        vox.mold('way', 999991977495368425989823173);  // -50% / day
        //vox.warp(2 days);
        assertEq(wad(vox.par()), 2445 trx);
    }
}

contract VoxHowTest is DSTest, DSMath {
    DevVox vox;

    function ray(uint256 wad_) internal pure returns (uint256) {
        return wad_ * 10 ** 9;
    }
    function setUp() public {
        vox = new DevVox(ray(7335 trx));
        vox.tune(ray(19.56 trx));
    }
    /*function test_price_too_low() public {
        vox.tell(ray(6846 trx));
        vox.warp(1 seconds);
        assertEq(vox.way(), ray(1.002 ether));
        vox.warp(2 seconds);
        assertEq(vox.way(), ray(1.006 ether));
    }

    function test_price_too_high() public {
        vox.tell(ray(0.80 ether));
        vox.warp(1 seconds);
        assertEq(vox.way(), 998003992015968063872255489);
        vox.warp(2 seconds);
        assertEq(vox.way(), 994035785288270377733598410);
    }*/
}