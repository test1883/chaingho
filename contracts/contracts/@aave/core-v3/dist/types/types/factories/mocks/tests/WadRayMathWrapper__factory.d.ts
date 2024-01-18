import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { WadRayMathWrapper, WadRayMathWrapperInterface } from "../../../mocks/tests/WadRayMathWrapper";
type WadRayMathWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WadRayMathWrapper__factory extends ContractFactory {
    constructor(...args: WadRayMathWrapperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WadRayMathWrapper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WadRayMathWrapper;
    connect(signer: Signer): WadRayMathWrapper__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103a5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80637df38c5b11610076578063d2e305851161005b578063d2e3058514610153578063e304e1d314610166578063e57b6d3b1461017457600080fd5b80637df38c5b146101325780639c34d8801461014057600080fd5b806329cb5aa4116100a757806329cb5aa4146100fa578063416a8b201461010d578063761fdad61461011f57600080fd5b806310de27b9146100c35780631fa89fc6146100e8575b600080fd5b6100d66100d1366004610334565b610187565b60405190815260200160405180910390f35b6b019d971e4fe8401e740000006100d6565b6100d6610108366004610334565b610198565b6b033b2e3c9fd0803ce80000006100d6565b6100d661012d36600461034d565b6101a3565b670de0b6b3a76400006100d6565b6100d661014e36600461034d565b6101b6565b6100d661016136600461034d565b6101c2565b6706f05b59d3b200006100d6565b6100d661018236600461034d565b6101ce565b6000610192826101da565b92915050565b6000610192826101f5565b60006101af8383610218565b9392505050565b60006101af8383610267565b60006101af83836102a6565b60006101af83836102fd565b633b9aca0081810290810482146101f057600080fd5b919050565b633b9aca00808204908206631dcd65008110610212576001820191505b50919050565b600081157ffffffffffffffffffffffffffffffffffffffffffffffffff90fa4a62c4dffff8390048411151761024d57600080fd5b50670de0b6b3a764000091026706f05b59d3b20000010490565b600081156b033b2e3c9fd0803ce80000006002840419048411171561028b57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff839004841115176102db57600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b60008115670de0b6b3a76400006002840419048411171561031d57600080fd5b50670de0b6b3a76400009190910260028204010490565b60006020828403121561034657600080fd5b5035919050565b6000806040838503121561036057600080fd5b5050803592602090910135915056fea2646970667358221220f9432a9af799bb10d995056756be0562199ad92b8d598178e8b687392eb4e6ec64736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): WadRayMathWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WadRayMathWrapper;
}
export {};
//# sourceMappingURL=WadRayMathWrapper__factory.d.ts.map