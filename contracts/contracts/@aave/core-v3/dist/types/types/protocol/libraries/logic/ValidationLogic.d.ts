import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ValidationLogicInterface extends utils.Interface {
    functions: {
        "HEALTH_FACTOR_LIQUIDATION_THRESHOLD()": FunctionFragment;
        "ISOLATED_COLLATERAL_SUPPLIER_ROLE()": FunctionFragment;
        "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD()": FunctionFragment;
        "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD" | "ISOLATED_COLLATERAL_SUPPLIER_ROLE" | "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD" | "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD"): FunctionFragment;
    encodeFunctionData(functionFragment: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "ISOLATED_COLLATERAL_SUPPLIER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD", values?: undefined): string;
    decodeFunctionResult(functionFragment: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ISOLATED_COLLATERAL_SUPPLIER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD", data: BytesLike): Result;
    events: {};
}
export interface ValidationLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ValidationLogicInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
        ISOLATED_COLLATERAL_SUPPLIER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
        REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    ISOLATED_COLLATERAL_SUPPLIER_ROLE(overrides?: CallOverrides): Promise<string>;
    MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        ISOLATED_COLLATERAL_SUPPLIER_ROLE(overrides?: CallOverrides): Promise<string>;
        MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        ISOLATED_COLLATERAL_SUPPLIER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
        REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ISOLATED_COLLATERAL_SUPPLIER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ValidationLogic.d.ts.map