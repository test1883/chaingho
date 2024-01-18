import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export interface MockAggregatorInterface extends utils.Interface {
    functions: {
        "decimals()": FunctionFragment;
        "getTokenType()": FunctionFragment;
        "latestAnswer()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decimals" | "getTokenType" | "latestAnswer"): FunctionFragment;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenType", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
    events: {
        "AnswerUpdated(int256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AnswerUpdated"): EventFragment;
}
export interface AnswerUpdatedEventObject {
    current: BigNumber;
    roundId: BigNumber;
    updatedAt: BigNumber;
}
export type AnswerUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], AnswerUpdatedEventObject>;
export type AnswerUpdatedEventFilter = TypedEventFilter<AnswerUpdatedEvent>;
export interface MockAggregator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockAggregatorInterface;
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
        decimals(overrides?: CallOverrides): Promise<[number]>;
        getTokenType(overrides?: CallOverrides): Promise<[BigNumber]>;
        latestAnswer(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    decimals(overrides?: CallOverrides): Promise<number>;
    getTokenType(overrides?: CallOverrides): Promise<BigNumber>;
    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        decimals(overrides?: CallOverrides): Promise<number>;
        getTokenType(overrides?: CallOverrides): Promise<BigNumber>;
        latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AnswerUpdated(int256,uint256,uint256)"(current?: PromiseOrValue<BigNumberish> | null, roundId?: PromiseOrValue<BigNumberish> | null, updatedAt?: null): AnswerUpdatedEventFilter;
        AnswerUpdated(current?: PromiseOrValue<BigNumberish> | null, roundId?: PromiseOrValue<BigNumberish> | null, updatedAt?: null): AnswerUpdatedEventFilter;
    };
    estimateGas: {
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        getTokenType(overrides?: CallOverrides): Promise<BigNumber>;
        latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockAggregator.d.ts.map