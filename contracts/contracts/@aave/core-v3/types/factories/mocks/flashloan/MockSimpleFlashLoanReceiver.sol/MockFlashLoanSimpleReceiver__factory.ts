/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MockFlashLoanSimpleReceiver,
  MockFlashLoanSimpleReceiverInterface,
} from "../../../../mocks/flashloan/MockSimpleFlashLoanReceiver.sol/MockFlashLoanSimpleReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "provider",
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
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
    ],
    name: "ExecutedWithFail",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
    ],
    name: "ExecutedWithSuccess",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract IPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract IPool",
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
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAmountToApprove",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amountToApprove",
        type: "uint256",
      },
    ],
    name: "setAmountToApprove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "fail",
        type: "bool",
      },
    ],
    name: "setFailExecutionTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "flag",
        type: "bool",
      },
    ],
    name: "setSimulateEOA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "simulateEOA",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161086d38038061086d83398101604081905261002f916100d8565b80806001600160a01b03166080816001600160a01b031681525050806001600160a01b031663026b1d5f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ac91906100d8565b6001600160a01b031660a052506100fc9050565b6001600160a01b03811681146100d557600080fd5b50565b6000602082840312156100ea57600080fd5b81516100f5816100c0565b9392505050565b60805160a05161074661012760003960008181610163015261043601526000609201526107466000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80635e76bba31161005b5780635e76bba31461014d5780637535d2461461015e578063bf443f8514610185578063e9a6a25b1461019857600080fd5b80630542975c1461008d5780631b11d0ff146100de578063388f70f1146101015780634444f33114610142575b600080fd5b6100b47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100f16100ec366004610588565b6101d7565b60405190151581526020016100d5565b61014061010f36600461069d565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b005b60025460ff166100f1565b6001546040519081526020016100d5565b6100b47f000000000000000000000000000000000000000000000000000000000000000081565b6101406101933660046106c1565b600155565b6101406101a636600461069d565b600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b6000805460ff1615610247576040805173ffffffffffffffffffffffffffffffffffffffff88168152602081018790529081018590527f816f6a6bc084e1996be1a831afa1af30763d0501b6b43b9e1922a11f347366d79060600160405180910390a15060025460ff1615610511565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152869073ffffffffffffffffffffffffffffffffffffffff8216906370a0823190602401602060405180830381865afa1580156102b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d791906106da565b861115610344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f496e76616c69642062616c616e636520666f722074686520636f6e7472616374604482015260640160405180910390fd5b6000600154600014156103605761035b878761051a565b610364565b6001545b6040517fa0712d680000000000000000000000000000000000000000000000000000000081526004810188905290915073ffffffffffffffffffffffffffffffffffffffff83169063a0712d68906024016020604051808303816000875af11580156103d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f891906106f3565b506040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820183905289169063095ea7b3906044016020604051808303816000875af115801561048e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b291906106f3565b506040805173ffffffffffffffffffffffffffffffffffffffff8a168152602081018990529081018790527f7d94e9d0c906b8d7b2b52a581b9e9ba728aa6f8cd8532bd87243d193f47401be9060600160405180910390a16001925050505b95945050505050565b8082018281101561052a57600080fd5b92915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461055457600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080600060a086880312156105a057600080fd5b6105a986610530565b945060208601359350604086013592506105c560608701610530565b9150608086013567ffffffffffffffff808211156105e257600080fd5b818801915088601f8301126105f657600080fd5b81358181111561060857610608610559565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561064e5761064e610559565b816040528281528b602084870101111561066757600080fd5b8260208601602083013760006020848301015280955050505050509295509295909350565b801515811461069a57600080fd5b50565b6000602082840312156106af57600080fd5b81356106ba8161068c565b9392505050565b6000602082840312156106d357600080fd5b5035919050565b6000602082840312156106ec57600080fd5b5051919050565b60006020828403121561070557600080fd5b81516106ba8161068c56fea26469706673582212202d46ff908d179eefc39ff529fea3a94d07e56a06a3a320a2ccb678144c28832264736f6c634300080a0033";

type MockFlashLoanSimpleReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFlashLoanSimpleReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFlashLoanSimpleReceiver__factory extends ContractFactory {
  constructor(...args: MockFlashLoanSimpleReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockFlashLoanSimpleReceiver> {
    return super.deploy(
      provider,
      overrides || {}
    ) as Promise<MockFlashLoanSimpleReceiver>;
  }
  override getDeployTransaction(
    provider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(provider, overrides || {});
  }
  override attach(address: string): MockFlashLoanSimpleReceiver {
    return super.attach(address) as MockFlashLoanSimpleReceiver;
  }
  override connect(signer: Signer): MockFlashLoanSimpleReceiver__factory {
    return super.connect(signer) as MockFlashLoanSimpleReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFlashLoanSimpleReceiverInterface {
    return new utils.Interface(_abi) as MockFlashLoanSimpleReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFlashLoanSimpleReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockFlashLoanSimpleReceiver;
  }
}
