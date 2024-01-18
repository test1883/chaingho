// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {IERC20WithPermit} from 'node_modules/@aave/core-v3/contracts/interfaces/IERC20WithPermit.sol';
import {IPool} from "node_modules/@aave/core-v3/contracts/interfaces/IPool.sol";
import {GhoToken} from "contracts/gho/GhoToken.sol";
import {IGhoToken} from "contracts/gho/interfaces/IGhoToken.sol";

contract ChainGHO {
    IERC20WithPermit[] Erc20Pools;
    IPool Pool;
    GhoToken Gho;

    /**
   * @dev Function to mint tokens
   * @param erc20pools Contract Addresses of ERC20 - DAI | LINK | USDC | WBTC | WETH | USDT | AAVE | EURS pools
   * @param pool Aave pool address
   * @param gho Gho Reserve address
   * @return A boolean that indicates if the operation was successful.
   */

    constructor (IERC20WithPermit[] erc20pools, IPool pool, GhoToken gho) {
        Erc20Pools = erc20pools;
        Pool = pool;
        Gho = gho;
    }
}