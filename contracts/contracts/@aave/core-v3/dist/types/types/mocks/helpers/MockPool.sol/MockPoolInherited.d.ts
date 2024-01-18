import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../common";
export declare namespace DataTypes {
    type EModeCategoryStruct = {
        ltv: PromiseOrValue<BigNumberish>;
        liquidationThreshold: PromiseOrValue<BigNumberish>;
        liquidationBonus: PromiseOrValue<BigNumberish>;
        priceSource: PromiseOrValue<string>;
        label: PromiseOrValue<string>;
    };
    type EModeCategoryStructOutput = [
        number,
        number,
        number,
        string,
        string
    ] & {
        ltv: number;
        liquidationThreshold: number;
        liquidationBonus: number;
        priceSource: string;
        label: string;
    };
    type ReserveConfigurationMapStruct = {
        data: PromiseOrValue<BigNumberish>;
    };
    type ReserveConfigurationMapStructOutput = [BigNumber] & {
        data: BigNumber;
    };
    type ReserveDataStruct = {
        configuration: DataTypes.ReserveConfigurationMapStruct;
        liquidityIndex: PromiseOrValue<BigNumberish>;
        currentLiquidityRate: PromiseOrValue<BigNumberish>;
        variableBorrowIndex: PromiseOrValue<BigNumberish>;
        currentVariableBorrowRate: PromiseOrValue<BigNumberish>;
        currentStableBorrowRate: PromiseOrValue<BigNumberish>;
        lastUpdateTimestamp: PromiseOrValue<BigNumberish>;
        id: PromiseOrValue<BigNumberish>;
        aTokenAddress: PromiseOrValue<string>;
        stableDebtTokenAddress: PromiseOrValue<string>;
        variableDebtTokenAddress: PromiseOrValue<string>;
        interestRateStrategyAddress: PromiseOrValue<string>;
        accruedToTreasury: PromiseOrValue<BigNumberish>;
        unbacked: PromiseOrValue<BigNumberish>;
        isolationModeTotalDebt: PromiseOrValue<BigNumberish>;
    };
    type ReserveDataStructOutput = [
        DataTypes.ReserveConfigurationMapStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        configuration: DataTypes.ReserveConfigurationMapStructOutput;
        liquidityIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        variableBorrowIndex: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        id: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        accruedToTreasury: BigNumber;
        unbacked: BigNumber;
        isolationModeTotalDebt: BigNumber;
    };
    type UserConfigurationMapStruct = {
        data: PromiseOrValue<BigNumberish>;
    };
    type UserConfigurationMapStructOutput = [BigNumber] & {
        data: BigNumber;
    };
}
export interface MockPoolInheritedInterface extends utils.Interface {
    functions: {
        "ADDRESSES_PROVIDER()": FunctionFragment;
        "BRIDGE_PROTOCOL_FEE()": FunctionFragment;
        "FLASHLOAN_PREMIUM_TOTAL()": FunctionFragment;
        "FLASHLOAN_PREMIUM_TO_PROTOCOL()": FunctionFragment;
        "MAX_NUMBER_RESERVES()": FunctionFragment;
        "MAX_STABLE_RATE_BORROW_SIZE_PERCENT()": FunctionFragment;
        "POOL_REVISION()": FunctionFragment;
        "backUnbacked(address,uint256,uint256)": FunctionFragment;
        "borrow(address,uint256,uint256,uint16,address)": FunctionFragment;
        "configureEModeCategory(uint8,(uint16,uint16,uint16,address,string))": FunctionFragment;
        "deposit(address,uint256,address,uint16)": FunctionFragment;
        "dropReserve(address)": FunctionFragment;
        "finalizeTransfer(address,address,address,uint256,uint256,uint256)": FunctionFragment;
        "flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)": FunctionFragment;
        "flashLoanSimple(address,address,uint256,bytes,uint16)": FunctionFragment;
        "getConfiguration(address)": FunctionFragment;
        "getEModeCategoryData(uint8)": FunctionFragment;
        "getReserveAddressById(uint16)": FunctionFragment;
        "getReserveData(address)": FunctionFragment;
        "getReserveNormalizedIncome(address)": FunctionFragment;
        "getReserveNormalizedVariableDebt(address)": FunctionFragment;
        "getReservesList()": FunctionFragment;
        "getUserAccountData(address)": FunctionFragment;
        "getUserConfiguration(address)": FunctionFragment;
        "getUserEMode(address)": FunctionFragment;
        "initReserve(address,address,address,address,address)": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "liquidationCall(address,address,address,uint256,bool)": FunctionFragment;
        "mintToTreasury(address[])": FunctionFragment;
        "mintUnbacked(address,uint256,address,uint16)": FunctionFragment;
        "rebalanceStableBorrowRate(address,address)": FunctionFragment;
        "repay(address,uint256,uint256,address)": FunctionFragment;
        "repayWithATokens(address,uint256,uint256)": FunctionFragment;
        "repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "rescueTokens(address,address,uint256)": FunctionFragment;
        "resetIsolationModeTotalDebt(address)": FunctionFragment;
        "setConfiguration(address,(uint256))": FunctionFragment;
        "setMaxNumberOfReserves(uint16)": FunctionFragment;
        "setReserveInterestRateStrategyAddress(address,address)": FunctionFragment;
        "setUserEMode(uint8)": FunctionFragment;
        "setUserUseReserveAsCollateral(address,bool)": FunctionFragment;
        "supply(address,uint256,address,uint16)": FunctionFragment;
        "supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "swapBorrowRateMode(address,uint256)": FunctionFragment;
        "updateBridgeProtocolFee(uint256)": FunctionFragment;
        "updateFlashloanPremiums(uint128,uint128)": FunctionFragment;
        "withdraw(address,uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ADDRESSES_PROVIDER" | "BRIDGE_PROTOCOL_FEE" | "FLASHLOAN_PREMIUM_TOTAL" | "FLASHLOAN_PREMIUM_TO_PROTOCOL" | "MAX_NUMBER_RESERVES" | "MAX_STABLE_RATE_BORROW_SIZE_PERCENT" | "POOL_REVISION" | "backUnbacked" | "borrow" | "configureEModeCategory" | "deposit" | "dropReserve" | "finalizeTransfer" | "flashLoan" | "flashLoanSimple" | "getConfiguration" | "getEModeCategoryData" | "getReserveAddressById" | "getReserveData" | "getReserveNormalizedIncome" | "getReserveNormalizedVariableDebt" | "getReservesList" | "getUserAccountData" | "getUserConfiguration" | "getUserEMode" | "initReserve" | "initialize" | "liquidationCall" | "mintToTreasury" | "mintUnbacked" | "rebalanceStableBorrowRate" | "repay" | "repayWithATokens" | "repayWithPermit" | "rescueTokens" | "resetIsolationModeTotalDebt" | "setConfiguration" | "setMaxNumberOfReserves" | "setReserveInterestRateStrategyAddress" | "setUserEMode" | "setUserUseReserveAsCollateral" | "supply" | "supplyWithPermit" | "swapBorrowRateMode" | "updateBridgeProtocolFee" | "updateFlashloanPremiums" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "ADDRESSES_PROVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "BRIDGE_PROTOCOL_FEE", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASHLOAN_PREMIUM_TOTAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "FLASHLOAN_PREMIUM_TO_PROTOCOL", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_NUMBER_RESERVES", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", values?: undefined): string;
    encodeFunctionData(functionFragment: "POOL_REVISION", values?: undefined): string;
    encodeFunctionData(functionFragment: "backUnbacked", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "borrow", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "configureEModeCategory", values: [PromiseOrValue<BigNumberish>, DataTypes.EModeCategoryStruct]): string;
    encodeFunctionData(functionFragment: "deposit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "dropReserve", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "finalizeTransfer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "flashLoan", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<BigNumberish>[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "flashLoanSimple", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getConfiguration", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getEModeCategoryData", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReserveAddressById", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReserveData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedIncome", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReserveNormalizedVariableDebt", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getReservesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUserAccountData", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserConfiguration", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getUserEMode", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "initReserve", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidationCall", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "mintToTreasury", values: [PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "mintUnbacked", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "rebalanceStableBorrowRate", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "repay", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "repayWithATokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "repayWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "resetIsolationModeTotalDebt", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setConfiguration", values: [PromiseOrValue<string>, DataTypes.ReserveConfigurationMapStruct]): string;
    encodeFunctionData(functionFragment: "setMaxNumberOfReserves", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReserveInterestRateStrategyAddress", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setUserEMode", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setUserUseReserveAsCollateral", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supply", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "supplyWithPermit", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "swapBorrowRateMode", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateBridgeProtocolFee", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "updateFlashloanPremiums", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "ADDRESSES_PROVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "BRIDGE_PROTOCOL_FEE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASHLOAN_PREMIUM_TOTAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "FLASHLOAN_PREMIUM_TO_PROTOCOL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_NUMBER_RESERVES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STABLE_RATE_BORROW_SIZE_PERCENT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "POOL_REVISION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "backUnbacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "configureEModeCategory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dropReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "finalizeTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flashLoanSimple", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEModeCategoryData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveAddressById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedIncome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReserveNormalizedVariableDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReservesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserAccountData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserEMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initReserve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintUnbacked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalanceStableBorrowRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayWithATokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetIsolationModeTotalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxNumberOfReserves", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReserveInterestRateStrategyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserEMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUserUseReserveAsCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supplyWithPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapBorrowRateMode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateBridgeProtocolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFlashloanPremiums", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "BackUnbacked(address,address,uint256,uint256)": EventFragment;
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)": EventFragment;
        "IsolationModeTotalDebtUpdated(address,uint256)": EventFragment;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)": EventFragment;
        "MintUnbacked(address,address,address,uint256,uint16)": EventFragment;
        "MintedToTreasury(address,uint256)": EventFragment;
        "RebalanceStableBorrowRate(address,address)": EventFragment;
        "Repay(address,address,address,uint256,bool)": EventFragment;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)": EventFragment;
        "ReserveUsedAsCollateralDisabled(address,address)": EventFragment;
        "ReserveUsedAsCollateralEnabled(address,address)": EventFragment;
        "Supply(address,address,address,uint256,uint16)": EventFragment;
        "SwapBorrowRateMode(address,address,uint8)": EventFragment;
        "UserEModeSet(address,uint8)": EventFragment;
        "Withdraw(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BackUnbacked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlashLoan"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IsolationModeTotalDebtUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "LiquidationCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintUnbacked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintedToTreasury"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RebalanceStableBorrowRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveDataUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReserveUsedAsCollateralEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SwapBorrowRateMode"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserEModeSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export interface BackUnbackedEventObject {
    reserve: string;
    backer: string;
    amount: BigNumber;
    fee: BigNumber;
}
export type BackUnbackedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], BackUnbackedEventObject>;
export type BackUnbackedEventFilter = TypedEventFilter<BackUnbackedEvent>;
export interface BorrowEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    interestRateMode: number;
    borrowRate: BigNumber;
    referralCode: number;
}
export type BorrowEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number
], BorrowEventObject>;
export type BorrowEventFilter = TypedEventFilter<BorrowEvent>;
export interface FlashLoanEventObject {
    target: string;
    initiator: string;
    asset: string;
    amount: BigNumber;
    interestRateMode: number;
    premium: BigNumber;
    referralCode: number;
}
export type FlashLoanEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number,
    BigNumber,
    number
], FlashLoanEventObject>;
export type FlashLoanEventFilter = TypedEventFilter<FlashLoanEvent>;
export interface IsolationModeTotalDebtUpdatedEventObject {
    asset: string;
    totalDebt: BigNumber;
}
export type IsolationModeTotalDebtUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], IsolationModeTotalDebtUpdatedEventObject>;
export type IsolationModeTotalDebtUpdatedEventFilter = TypedEventFilter<IsolationModeTotalDebtUpdatedEvent>;
export interface LiquidationCallEventObject {
    collateralAsset: string;
    debtAsset: string;
    user: string;
    debtToCover: BigNumber;
    liquidatedCollateralAmount: BigNumber;
    liquidator: string;
    receiveAToken: boolean;
}
export type LiquidationCallEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    boolean
], LiquidationCallEventObject>;
export type LiquidationCallEventFilter = TypedEventFilter<LiquidationCallEvent>;
export interface MintUnbackedEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: number;
}
export type MintUnbackedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], MintUnbackedEventObject>;
export type MintUnbackedEventFilter = TypedEventFilter<MintUnbackedEvent>;
export interface MintedToTreasuryEventObject {
    reserve: string;
    amountMinted: BigNumber;
}
export type MintedToTreasuryEvent = TypedEvent<[
    string,
    BigNumber
], MintedToTreasuryEventObject>;
export type MintedToTreasuryEventFilter = TypedEventFilter<MintedToTreasuryEvent>;
export interface RebalanceStableBorrowRateEventObject {
    reserve: string;
    user: string;
}
export type RebalanceStableBorrowRateEvent = TypedEvent<[
    string,
    string
], RebalanceStableBorrowRateEventObject>;
export type RebalanceStableBorrowRateEventFilter = TypedEventFilter<RebalanceStableBorrowRateEvent>;
export interface RepayEventObject {
    reserve: string;
    user: string;
    repayer: string;
    amount: BigNumber;
    useATokens: boolean;
}
export type RepayEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    boolean
], RepayEventObject>;
export type RepayEventFilter = TypedEventFilter<RepayEvent>;
export interface ReserveDataUpdatedEventObject {
    reserve: string;
    liquidityRate: BigNumber;
    stableBorrowRate: BigNumber;
    variableBorrowRate: BigNumber;
    liquidityIndex: BigNumber;
    variableBorrowIndex: BigNumber;
}
export type ReserveDataUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], ReserveDataUpdatedEventObject>;
export type ReserveDataUpdatedEventFilter = TypedEventFilter<ReserveDataUpdatedEvent>;
export interface ReserveUsedAsCollateralDisabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralDisabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralDisabledEventObject>;
export type ReserveUsedAsCollateralDisabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralDisabledEvent>;
export interface ReserveUsedAsCollateralEnabledEventObject {
    reserve: string;
    user: string;
}
export type ReserveUsedAsCollateralEnabledEvent = TypedEvent<[
    string,
    string
], ReserveUsedAsCollateralEnabledEventObject>;
export type ReserveUsedAsCollateralEnabledEventFilter = TypedEventFilter<ReserveUsedAsCollateralEnabledEvent>;
export interface SupplyEventObject {
    reserve: string;
    user: string;
    onBehalfOf: string;
    amount: BigNumber;
    referralCode: number;
}
export type SupplyEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    number
], SupplyEventObject>;
export type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
export interface SwapBorrowRateModeEventObject {
    reserve: string;
    user: string;
    interestRateMode: number;
}
export type SwapBorrowRateModeEvent = TypedEvent<[
    string,
    string,
    number
], SwapBorrowRateModeEventObject>;
export type SwapBorrowRateModeEventFilter = TypedEventFilter<SwapBorrowRateModeEvent>;
export interface UserEModeSetEventObject {
    user: string;
    categoryId: number;
}
export type UserEModeSetEvent = TypedEvent<[
    string,
    number
], UserEModeSetEventObject>;
export type UserEModeSetEventFilter = TypedEventFilter<UserEModeSetEvent>;
export interface WithdrawEventObject {
    reserve: string;
    user: string;
    to: string;
    amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], WithdrawEventObject>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface MockPoolInherited extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockPoolInheritedInterface;
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
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<[BigNumber]>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<[number]>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<[BigNumber]>;
        POOL_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;
        backUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        configureEModeCategory(id: PromiseOrValue<BigNumberish>, category: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromBefore: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], interestRateModes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        flashLoanSimple(receiverAddress: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.ReserveConfigurationMapStructOutput]>;
        getEModeCategoryData(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[DataTypes.EModeCategoryStructOutput]>;
        getReserveAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.ReserveDataStructOutput]>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        getReservesList(overrides?: CallOverrides): Promise<[string[]]>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralBase: BigNumber;
            totalDebtBase: BigNumber;
            availableBorrowsBase: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[DataTypes.UserConfigurationMapStructOutput]>;
        getUserEMode(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        initReserve(asset: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintToTreasury(assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repayWithATokens(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repayWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        resetIsolationModeTotalDebt(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfiguration(asset: PromiseOrValue<string>, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaxNumberOfReserves(newMaxNumberOfReserves: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUserEMode(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supplyWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateBridgeProtocolFee(protocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateFlashloanPremiums(flashLoanPremiumTotal: PromiseOrValue<BigNumberish>, flashLoanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
    BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;
    FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<BigNumber>;
    FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<number>;
    MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
    POOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
    backUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    configureEModeCategory(id: PromiseOrValue<BigNumberish>, category: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromBefore: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], interestRateModes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    flashLoanSimple(receiverAddress: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>;
    getEModeCategoryData(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.EModeCategoryStructOutput>;
    getReserveAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>;
    getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getReservesList(overrides?: CallOverrides): Promise<string[]>;
    getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalCollateralBase: BigNumber;
        totalDebtBase: BigNumber;
        availableBorrowsBase: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
    }>;
    getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.UserConfigurationMapStructOutput>;
    getUserEMode(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    initReserve(asset: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintToTreasury(assets: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repayWithATokens(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repayWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    resetIsolationModeTotalDebt(asset: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfiguration(asset: PromiseOrValue<string>, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaxNumberOfReserves(newMaxNumberOfReserves: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUserEMode(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supplyWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    swapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateBridgeProtocolFee(protocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateFlashloanPremiums(flashLoanPremiumTotal: PromiseOrValue<BigNumberish>, flashLoanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<number>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        backUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        configureEModeCategory(id: PromiseOrValue<BigNumberish>, category: DataTypes.EModeCategoryStruct, overrides?: CallOverrides): Promise<void>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromBefore: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], interestRateModes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        flashLoanSimple(receiverAddress: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveConfigurationMapStructOutput>;
        getEModeCategoryData(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<DataTypes.EModeCategoryStructOutput>;
        getReserveAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.ReserveDataStructOutput>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<string[]>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalCollateralBase: BigNumber;
            totalDebtBase: BigNumber;
            availableBorrowsBase: BigNumber;
            currentLiquidationThreshold: BigNumber;
            ltv: BigNumber;
            healthFactor: BigNumber;
        }>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<DataTypes.UserConfigurationMapStructOutput>;
        getUserEMode(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initReserve(asset: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        initialize(provider: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        mintToTreasury(assets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<void>;
        mintUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        repayWithATokens(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        repayWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        resetIsolationModeTotalDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setConfiguration(asset: PromiseOrValue<string>, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: CallOverrides): Promise<void>;
        setMaxNumberOfReserves(newMaxNumberOfReserves: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setUserEMode(categoryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        supplyWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateBridgeProtocolFee(protocolFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        updateFlashloanPremiums(flashLoanPremiumTotal: PromiseOrValue<BigNumberish>, flashLoanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "BackUnbacked(address,address,uint256,uint256)"(reserve?: PromiseOrValue<string> | null, backer?: PromiseOrValue<string> | null, amount?: null, fee?: null): BackUnbackedEventFilter;
        BackUnbacked(reserve?: PromiseOrValue<string> | null, backer?: PromiseOrValue<string> | null, amount?: null, fee?: null): BackUnbackedEventFilter;
        "Borrow(address,address,address,uint256,uint8,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, borrowRate?: null, referralCode?: PromiseOrValue<BigNumberish> | null): BorrowEventFilter;
        Borrow(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, borrowRate?: null, referralCode?: PromiseOrValue<BigNumberish> | null): BorrowEventFilter;
        "FlashLoan(address,address,address,uint256,uint8,uint256,uint16)"(target?: PromiseOrValue<string> | null, initiator?: null, asset?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, premium?: null, referralCode?: PromiseOrValue<BigNumberish> | null): FlashLoanEventFilter;
        FlashLoan(target?: PromiseOrValue<string> | null, initiator?: null, asset?: PromiseOrValue<string> | null, amount?: null, interestRateMode?: null, premium?: null, referralCode?: PromiseOrValue<BigNumberish> | null): FlashLoanEventFilter;
        "IsolationModeTotalDebtUpdated(address,uint256)"(asset?: PromiseOrValue<string> | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        IsolationModeTotalDebtUpdated(asset?: PromiseOrValue<string> | null, totalDebt?: null): IsolationModeTotalDebtUpdatedEventFilter;
        "LiquidationCall(address,address,address,uint256,uint256,address,bool)"(collateralAsset?: PromiseOrValue<string> | null, debtAsset?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        LiquidationCall(collateralAsset?: PromiseOrValue<string> | null, debtAsset?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, debtToCover?: null, liquidatedCollateralAmount?: null, liquidator?: null, receiveAToken?: null): LiquidationCallEventFilter;
        "MintUnbacked(address,address,address,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): MintUnbackedEventFilter;
        MintUnbacked(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): MintUnbackedEventFilter;
        "MintedToTreasury(address,uint256)"(reserve?: PromiseOrValue<string> | null, amountMinted?: null): MintedToTreasuryEventFilter;
        MintedToTreasury(reserve?: PromiseOrValue<string> | null, amountMinted?: null): MintedToTreasuryEventFilter;
        "RebalanceStableBorrowRate(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): RebalanceStableBorrowRateEventFilter;
        RebalanceStableBorrowRate(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): RebalanceStableBorrowRateEventFilter;
        "Repay(address,address,address,uint256,bool)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, repayer?: PromiseOrValue<string> | null, amount?: null, useATokens?: null): RepayEventFilter;
        Repay(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, repayer?: PromiseOrValue<string> | null, amount?: null, useATokens?: null): RepayEventFilter;
        "ReserveDataUpdated(address,uint256,uint256,uint256,uint256,uint256)"(reserve?: PromiseOrValue<string> | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        ReserveDataUpdated(reserve?: PromiseOrValue<string> | null, liquidityRate?: null, stableBorrowRate?: null, variableBorrowRate?: null, liquidityIndex?: null, variableBorrowIndex?: null): ReserveDataUpdatedEventFilter;
        "ReserveUsedAsCollateralDisabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        ReserveUsedAsCollateralDisabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralDisabledEventFilter;
        "ReserveUsedAsCollateralEnabled(address,address)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        ReserveUsedAsCollateralEnabled(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null): ReserveUsedAsCollateralEnabledEventFilter;
        "Supply(address,address,address,uint256,uint16)"(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): SupplyEventFilter;
        Supply(reserve?: PromiseOrValue<string> | null, user?: null, onBehalfOf?: PromiseOrValue<string> | null, amount?: null, referralCode?: PromiseOrValue<BigNumberish> | null): SupplyEventFilter;
        "SwapBorrowRateMode(address,address,uint8)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, interestRateMode?: null): SwapBorrowRateModeEventFilter;
        SwapBorrowRateMode(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, interestRateMode?: null): SwapBorrowRateModeEventFilter;
        "UserEModeSet(address,uint8)"(user?: PromiseOrValue<string> | null, categoryId?: null): UserEModeSetEventFilter;
        UserEModeSet(user?: PromiseOrValue<string> | null, categoryId?: null): UserEModeSetEventFilter;
        "Withdraw(address,address,address,uint256)"(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
        Withdraw(reserve?: PromiseOrValue<string> | null, user?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, amount?: null): WithdrawEventFilter;
    };
    estimateGas: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<BigNumber>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<BigNumber>;
        POOL_REVISION(overrides?: CallOverrides): Promise<BigNumber>;
        backUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        configureEModeCategory(id: PromiseOrValue<BigNumberish>, category: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromBefore: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], interestRateModes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        flashLoanSimple(receiverAddress: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getEModeCategoryData(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getReservesList(overrides?: CallOverrides): Promise<BigNumber>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getUserEMode(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        initReserve(asset: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintToTreasury(assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repayWithATokens(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repayWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        resetIsolationModeTotalDebt(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfiguration(asset: PromiseOrValue<string>, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaxNumberOfReserves(newMaxNumberOfReserves: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUserEMode(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supplyWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateBridgeProtocolFee(protocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateFlashloanPremiums(flashLoanPremiumTotal: PromiseOrValue<BigNumberish>, flashLoanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        BRIDGE_PROTOCOL_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FLASHLOAN_PREMIUM_TOTAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        FLASHLOAN_PREMIUM_TO_PROTOCOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_NUMBER_RESERVES(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STABLE_RATE_BORROW_SIZE_PERCENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        POOL_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        backUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        borrow(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, referralCode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        configureEModeCategory(id: PromiseOrValue<BigNumberish>, category: DataTypes.EModeCategoryStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        deposit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        dropReserve(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        finalizeTransfer(asset: PromiseOrValue<string>, from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, balanceFromBefore: PromiseOrValue<BigNumberish>, balanceToBefore: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flashLoan(receiverAddress: PromiseOrValue<string>, assets: PromiseOrValue<string>[], amounts: PromiseOrValue<BigNumberish>[], interestRateModes: PromiseOrValue<BigNumberish>[], onBehalfOf: PromiseOrValue<string>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        flashLoanSimple(receiverAddress: PromiseOrValue<string>, asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, params: PromiseOrValue<BytesLike>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfiguration(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEModeCategoryData(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveAddressById(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveData(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedIncome(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReserveNormalizedVariableDebt(asset: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReservesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserAccountData(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserConfiguration(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserEMode(user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initReserve(asset: PromiseOrValue<string>, aTokenAddress: PromiseOrValue<string>, stableDebtAddress: PromiseOrValue<string>, variableDebtAddress: PromiseOrValue<string>, interestRateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        initialize(provider: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        liquidationCall(collateralAsset: PromiseOrValue<string>, debtAsset: PromiseOrValue<string>, user: PromiseOrValue<string>, debtToCover: PromiseOrValue<BigNumberish>, receiveAToken: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintToTreasury(assets: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintUnbacked(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rebalanceStableBorrowRate(asset: PromiseOrValue<string>, user: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repay(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repayWithATokens(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repayWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, interestRateMode: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        rescueTokens(token: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        resetIsolationModeTotalDebt(asset: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfiguration(asset: PromiseOrValue<string>, configuration: DataTypes.ReserveConfigurationMapStruct, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaxNumberOfReserves(newMaxNumberOfReserves: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReserveInterestRateStrategyAddress(asset: PromiseOrValue<string>, rateStrategyAddress: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUserEMode(categoryId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setUserUseReserveAsCollateral(asset: PromiseOrValue<string>, useAsCollateral: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supply(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supplyWithPermit(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, onBehalfOf: PromiseOrValue<string>, referralCode: PromiseOrValue<BigNumberish>, deadline: PromiseOrValue<BigNumberish>, permitV: PromiseOrValue<BigNumberish>, permitR: PromiseOrValue<BytesLike>, permitS: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        swapBorrowRateMode(asset: PromiseOrValue<string>, interestRateMode: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateBridgeProtocolFee(protocolFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateFlashloanPremiums(flashLoanPremiumTotal: PromiseOrValue<BigNumberish>, flashLoanPremiumToProtocol: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(asset: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockPoolInherited.d.ts.map