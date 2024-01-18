import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { InitializableUpgradeabilityProxy, InitializableUpgradeabilityProxyInterface } from "../../../../dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy";
type InitializableUpgradeabilityProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class InitializableUpgradeabilityProxy__factory extends ContractFactory {
    constructor(...args: InitializableUpgradeabilityProxyConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<InitializableUpgradeabilityProxy>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): InitializableUpgradeabilityProxy;
    connect(signer: Signer): InitializableUpgradeabilityProxy__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506104c0806100206000396000f3fe60806040526004361061001e5760003560e01c8063d1f5789414610028575b61002661003b565b005b6100266100363660046102e7565b61006d565b61006b6100667f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61019b565b565b60006100977f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b73ffffffffffffffffffffffffffffffffffffffff16146100b757600080fd5b6100e260017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6103e2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc1461011057610110610420565b610119826101bf565b8051156101975760008273ffffffffffffffffffffffffffffffffffffffff1682604051610147919061044f565b600060405180830381855af49150503d8060008114610182576040519150601f19603f3d011682016040523d82523d6000602084013e610187565b606091505b505090508061019557600080fd5b505b5050565b3660008037600080366000845af43d6000803e8080156101ba573d6000f35b3d6000fd5b6101c88161027c565b610258576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906102b057508115155b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156102fa57600080fd5b823573ffffffffffffffffffffffffffffffffffffffff8116811461031e57600080fd5b9150602083013567ffffffffffffffff8082111561033b57600080fd5b818501915085601f83011261034f57600080fd5b813581811115610361576103616102b8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156103a7576103a76102b8565b816040528281528860208487010111156103c057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008282101561041b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000825160005b818110156104705760208186018101518583015201610456565b8181111561047f576000828501525b50919091019291505056fea26469706673582212207e904ad507d85d554eaf1e17cc807bb7aaf3ade575916e564c816f768891cc3064736f6c634300080a0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): InitializableUpgradeabilityProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): InitializableUpgradeabilityProxy;
}
export {};
//# sourceMappingURL=InitializableUpgradeabilityProxy__factory.d.ts.map