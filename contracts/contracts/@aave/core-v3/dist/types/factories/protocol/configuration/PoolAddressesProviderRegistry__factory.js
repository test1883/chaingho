"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolAddressesProviderRegistry__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addressesProvider",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "AddressesProviderRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addressesProvider",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "AddressesProviderUnregistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "getAddressesProviderAddressById",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addressesProvider",
                type: "address",
            },
        ],
        name: "getAddressesProviderIdByAddress",
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
        name: "getAddressesProvidersList",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "registerAddressesProvider",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "provider",
                type: "address",
            },
        ],
        name: "unregisterAddressesProvider",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610edf380380610edf83398101604081905261002f9161017a565b600080546001600160a01b03191633908117825560405190918291600080516020610ebf833981519152908290a3506100678161006d565b506101aa565b6000546001600160a01b031633146100cc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b0381166101315760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100c3565b600080546040516001600160a01b0380851693921691600080516020610ebf83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561018c57600080fd5b81516001600160a01b03811681146101a357600080fd5b9392505050565b610d06806101b96000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610123578063d0267be714610141578063d258191e14610185578063f2fde38b1461019857600080fd5b80630de267071461008d578063365ccbbf146100a257806357dc0566146100c0578063715018a61461011b575b600080fd5b6100a061009b366004610b02565b6101ab565b005b6100aa610375565b6040516100b79190610b24565b60405180910390f35b6100f66100ce366004610b7e565b60009081526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b7565b6100a06103e4565b60005473ffffffffffffffffffffffffffffffffffffffff166100f6565b61017761014f366004610b02565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6040519081526020016100b7565b6100a0610193366004610b97565b6104d4565b6100a06101a6366004610b02565b6107c2565b60005473ffffffffffffffffffffffffffffffffffffffff163314610231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600160208181526040928390205483518085019094529183527f3700000000000000000000000000000000000000000000000000000000000000908301526102c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102289190610bc1565b5073ffffffffffffffffffffffffffffffffffffffff8116600081815260016020818152604080842080548086526002845291852080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055948452919052915561032e82610973565b604051819073ffffffffffffffffffffffffffffffffffffffff8416907f254723080701bde71d562cad0e967cef23d86bb27ee842c190a2596820f3b24190600090a35050565b606060038054806020026020016040519081016040528092919081815260200182805480156103da57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116103af575b5050505050905090565b60005473ffffffffffffffffffffffffffffffffffffffff163314610465576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610228565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610228565b60408051808201909152600181527f38000000000000000000000000000000000000000000000000000000000000006020820152816105c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102289190610bc1565b50600081815260026020908152604091829020548251808401909352600183527f38000000000000000000000000000000000000000000000000000000000000009183019190915273ffffffffffffffffffffffffffffffffffffffff1615610657576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102289190610bc1565b5073ffffffffffffffffffffffffffffffffffffffff8216600090815260016020908152604091829020548251808401909352600283527f383600000000000000000000000000000000000000000000000000000000000091830191909152156106ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102289190610bc1565b5073ffffffffffffffffffffffffffffffffffffffff821660008181526001602081815260408084208690558584526002825280842080547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116871790915560038054878752600490945282862084905593830184559284527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90910180549092168417909155518392917fc2e7cc813550ef0e7126cc0571281850ce5df2e9c400acf3589c38e4627f85f191a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610843576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610228565b73ffffffffffffffffffffffffffffffffffffffff81166108e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610228565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526004602052604081208054908290556003549091906109b090600190610c34565b905080821015610a6b576000600382815481106109cf576109cf610c72565b6000918252602090912001546003805473ffffffffffffffffffffffffffffffffffffffff9092169250829185908110610a0b57610a0b610c72565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9485161790559290911681526004909152604090208290555b6003805480610a7c57610a7c610ca1565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055019055505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610afd57600080fd5b919050565b600060208284031215610b1457600080fd5b610b1d82610ad9565b9392505050565b6020808252825182820181905260009190848201906040850190845b81811015610b7257835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610b40565b50909695505050505050565b600060208284031215610b9057600080fd5b5035919050565b60008060408385031215610baa57600080fd5b610bb383610ad9565b946020939093013593505050565b600060208083528351808285015260005b81811015610bee57858101830151858201604001528201610bd2565b81811115610c00576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600082821015610c6d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122052f13d7f51f2154513d47dd22abe476dccfa0c7a68a69ce6ad4f26e7b10b29b364736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
const isSuperArgs = (xs) => xs.length > 1;
class PoolAddressesProviderRegistry__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(owner, overrides) {
        return super.deploy(owner, overrides || {});
    }
    getDeployTransaction(owner, overrides) {
        return super.getDeployTransaction(owner, overrides || {});
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
exports.PoolAddressesProviderRegistry__factory = PoolAddressesProviderRegistry__factory;
PoolAddressesProviderRegistry__factory.bytecode = _bytecode;
PoolAddressesProviderRegistry__factory.abi = _abi;
