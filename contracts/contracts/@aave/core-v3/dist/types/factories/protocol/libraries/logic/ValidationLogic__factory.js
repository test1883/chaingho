"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ISOLATED_COLLATERAL_SUPPLIER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x60e8610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060515760003560e01c80632b0139fa146056578063561cbec914608e578063abfcc86a14609c578063c3525c281460a4575b600080fd5b607c7fd1d2cf869016112a9af1107bcf43c3759daf22cf734aad47d0c9c726e33bc78281565b60405190815260200160405180910390f35b607c670d2f13f7789f000081565b607c61232881565b607c670de0b6b3a76400008156fea2646970667358221220f862462e5efd50403333ac89fa640a752c4984d1cc701304d30e61822441cb7464736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class ValidationLogic__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ValidationLogic__factory = ValidationLogic__factory;
ValidationLogic__factory.bytecode = _bytecode;
ValidationLogic__factory.abi = _abi;