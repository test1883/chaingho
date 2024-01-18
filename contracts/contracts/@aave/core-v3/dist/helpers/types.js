"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateMode = exports.TokenContractId = exports.ProtocolErrors = exports.eContractid = exports.eEthereumNetwork = void 0;
var eEthereumNetwork;
(function (eEthereumNetwork) {
    eEthereumNetwork["kovan"] = "kovan";
    eEthereumNetwork["ropsten"] = "ropsten";
    eEthereumNetwork["main"] = "main";
    eEthereumNetwork["coverage"] = "coverage";
    eEthereumNetwork["hardhat"] = "hardhat";
    eEthereumNetwork["tenderlyMain"] = "tenderlyMain";
})(eEthereumNetwork = exports.eEthereumNetwork || (exports.eEthereumNetwork = {}));
var eContractid;
(function (eContractid) {
    eContractid["Example"] = "Example";
    eContractid["PoolAddressesProvider"] = "PoolAddressesProvider";
    eContractid["MintableERC20"] = "MintableERC20";
    eContractid["MintableDelegationERC20"] = "MintableDelegationERC20";
    eContractid["PoolAddressesProviderRegistry"] = "PoolAddressesProviderRegistry";
    eContractid["ACLManager"] = "ACLManager";
    eContractid["PoolParametersProvider"] = "PoolParametersProvider";
    eContractid["PoolConfigurator"] = "PoolConfigurator";
    eContractid["ValidationLogic"] = "ValidationLogic";
    eContractid["ReserveLogic"] = "ReserveLogic";
    eContractid["GenericLogic"] = "GenericLogic";
    eContractid["SupplyLogic"] = "SupplyLogic";
    eContractid["BorrowLogic"] = "BorrowLogic";
    eContractid["FlashLoanLogic"] = "FlashLoanLogic";
    eContractid["LiquidationLogic"] = "LiquidationLogic";
    eContractid["BridgeLogic"] = "BridgeLogic";
    eContractid["EModeLogic"] = "EModeLogic";
    eContractid["ConfiguratorLogic"] = "ConfiguratorLogic";
    eContractid["Pool"] = "Pool";
    eContractid["PriceOracle"] = "PriceOracle";
    eContractid["Proxy"] = "Proxy";
    eContractid["MockAggregator"] = "MockAggregator";
    eContractid["AaveOracle"] = "AaveOracle";
    eContractid["DefaultReserveInterestRateStrategy"] = "DefaultReserveInterestRateStrategy";
    eContractid["InitializableImmutableAdminUpgradeabilityProxy"] = "InitializableImmutableAdminUpgradeabilityProxy";
    eContractid["MockFlashLoanReceiver"] = "MockFlashLoanReceiver";
    eContractid["AToken"] = "AToken";
    eContractid["MockAToken"] = "MockAToken";
    eContractid["DelegationAwareAToken"] = "DelegationAwareAToken";
    eContractid["MockStableDebtToken"] = "MockStableDebtToken";
    eContractid["MockVariableDebtToken"] = "MockVariableDebtToken";
    eContractid["AaveProtocolDataProvider"] = "AaveProtocolDataProvider";
    eContractid["IERC20Detailed"] = "IERC20Detailed";
    eContractid["StableDebtToken"] = "StableDebtToken";
    eContractid["VariableDebtToken"] = "VariableDebtToken";
    eContractid["FeeProvider"] = "FeeProvider";
    eContractid["TokenDistributor"] = "TokenDistributor";
    eContractid["ReservesSetupHelper"] = "ReservesSetupHelper";
    eContractid["WETH"] = "WETH";
    eContractid["WETHMocked"] = "WETHMocked";
    eContractid["PoolImpl"] = "PoolImpl";
    eContractid["PoolConfiguratorImpl"] = "PoolConfiguratorImpl";
    eContractid["MockIncentivesController"] = "MockIncentivesController";
    eContractid["MockReserveConfiguration"] = "MockReserveConfiguration";
    eContractid["MockPool"] = "MockPool";
    eContractid["MockInitializableImple"] = "MockInitializableImple";
    eContractid["MockInitializableImpleV2"] = "MockInitializableImpleV2";
    eContractid["MockInitializableFromConstructorImple"] = "MockInitializableFromConstructorImple";
    eContractid["MockReentrantInitializableImple"] = "MockReentrantInitializableImple";
})(eContractid = exports.eContractid || (exports.eContractid = {}));
/*
 * Error messages
 */
var ProtocolErrors;
(function (ProtocolErrors) {
    ProtocolErrors["CALLER_NOT_POOL_ADMIN"] = "1";
    ProtocolErrors["CALLER_NOT_EMERGENCY_ADMIN"] = "2";
    ProtocolErrors["CALLER_NOT_POOL_OR_EMERGENCY_ADMIN"] = "3";
    ProtocolErrors["CALLER_NOT_RISK_OR_POOL_ADMIN"] = "4";
    ProtocolErrors["CALLER_NOT_ASSET_LISTING_OR_POOL_ADMIN"] = "5";
    ProtocolErrors["CALLER_NOT_BRIDGE"] = "6";
    ProtocolErrors["ADDRESSES_PROVIDER_NOT_REGISTERED"] = "7";
    ProtocolErrors["INVALID_ADDRESSES_PROVIDER_ID"] = "8";
    ProtocolErrors["NOT_CONTRACT"] = "9";
    ProtocolErrors["CALLER_NOT_POOL_CONFIGURATOR"] = "10";
    ProtocolErrors["CALLER_NOT_ATOKEN"] = "11";
    ProtocolErrors["INVALID_ADDRESSES_PROVIDER"] = "12";
    ProtocolErrors["INVALID_FLASHLOAN_EXECUTOR_RETURN"] = "13";
    ProtocolErrors["RESERVE_ALREADY_ADDED"] = "14";
    ProtocolErrors["NO_MORE_RESERVES_ALLOWED"] = "15";
    ProtocolErrors["EMODE_CATEGORY_RESERVED"] = "16";
    ProtocolErrors["INVALID_EMODE_CATEGORY_ASSIGNMENT"] = "17";
    ProtocolErrors["RESERVE_LIQUIDITY_NOT_ZERO"] = "18";
    ProtocolErrors["FLASHLOAN_PREMIUM_INVALID"] = "19";
    ProtocolErrors["INVALID_RESERVE_PARAMS"] = "20";
    ProtocolErrors["INVALID_EMODE_CATEGORY_PARAMS"] = "21";
    ProtocolErrors["BRIDGE_PROTOCOL_FEE_INVALID"] = "22";
    ProtocolErrors["CALLER_MUST_BE_POOL"] = "23";
    ProtocolErrors["INVALID_MINT_AMOUNT"] = "24";
    ProtocolErrors["INVALID_BURN_AMOUNT"] = "25";
    ProtocolErrors["INVALID_AMOUNT"] = "26";
    ProtocolErrors["RESERVE_INACTIVE"] = "27";
    ProtocolErrors["RESERVE_FROZEN"] = "28";
    ProtocolErrors["RESERVE_PAUSED"] = "29";
    ProtocolErrors["BORROWING_NOT_ENABLED"] = "30";
    ProtocolErrors["STABLE_BORROWING_NOT_ENABLED"] = "31";
    ProtocolErrors["NOT_ENOUGH_AVAILABLE_USER_BALANCE"] = "32";
    ProtocolErrors["INVALID_INTEREST_RATE_MODE_SELECTED"] = "33";
    ProtocolErrors["COLLATERAL_BALANCE_IS_ZERO"] = "34";
    ProtocolErrors["HEALTH_FACTOR_LOWER_THAN_LIQUIDATION_THRESHOLD"] = "35";
    ProtocolErrors["COLLATERAL_CANNOT_COVER_NEW_BORROW"] = "36";
    ProtocolErrors["COLLATERAL_SAME_AS_BORROWING_CURRENCY"] = "37";
    ProtocolErrors["AMOUNT_BIGGER_THAN_MAX_LOAN_SIZE_STABLE"] = "38";
    ProtocolErrors["NO_DEBT_OF_SELECTED_TYPE"] = "39";
    ProtocolErrors["NO_EXPLICIT_AMOUNT_TO_REPAY_ON_BEHALF"] = "40";
    ProtocolErrors["NO_OUTSTANDING_STABLE_DEBT"] = "41";
    ProtocolErrors["NO_OUTSTANDING_VARIABLE_DEBT"] = "42";
    ProtocolErrors["UNDERLYING_BALANCE_ZERO"] = "43";
    ProtocolErrors["INTEREST_RATE_REBALANCE_CONDITIONS_NOT_MET"] = "44";
    ProtocolErrors["HEALTH_FACTOR_NOT_BELOW_THRESHOLD"] = "45";
    ProtocolErrors["COLLATERAL_CANNOT_BE_LIQUIDATED"] = "46";
    ProtocolErrors["SPECIFIED_CURRENCY_NOT_BORROWED_BY_USER"] = "47";
    ProtocolErrors["INCONSISTENT_FLASHLOAN_PARAMS"] = "49";
    ProtocolErrors["BORROW_CAP_EXCEEDED"] = "50";
    ProtocolErrors["SUPPLY_CAP_EXCEEDED"] = "51";
    ProtocolErrors["UNBACKED_MINT_CAP_EXCEEDED"] = "52";
    ProtocolErrors["DEBT_CEILING_EXCEEDED"] = "53";
    ProtocolErrors["UNDERLYING_CLAIMABLE_RIGHTS_NOT_ZERO"] = "54";
    ProtocolErrors["STABLE_DEBT_NOT_ZERO"] = "55";
    ProtocolErrors["VARIABLE_DEBT_SUPPLY_NOT_ZERO"] = "56";
    ProtocolErrors["LTV_VALIDATION_FAILED"] = "57";
    ProtocolErrors["INCONSISTENT_EMODE_CATEGORY"] = "58";
    ProtocolErrors["PRICE_ORACLE_SENTINEL_CHECK_FAILED"] = "59";
    ProtocolErrors["ASSET_NOT_BORROWABLE_IN_ISOLATION"] = "60";
    ProtocolErrors["RESERVE_ALREADY_INITIALIZED"] = "61";
    ProtocolErrors["USER_IN_ISOLATION_MODE_OR_LTV_ZERO"] = "62";
    ProtocolErrors["INVALID_LTV"] = "63";
    ProtocolErrors["INVALID_LIQ_THRESHOLD"] = "64";
    ProtocolErrors["INVALID_LIQ_BONUS"] = "65";
    ProtocolErrors["INVALID_DECIMALS"] = "66";
    ProtocolErrors["INVALID_RESERVE_FACTOR"] = "67";
    ProtocolErrors["INVALID_BORROW_CAP"] = "68";
    ProtocolErrors["INVALID_SUPPLY_CAP"] = "69";
    ProtocolErrors["INVALID_LIQUIDATION_PROTOCOL_FEE"] = "70";
    ProtocolErrors["INVALID_EMODE_CATEGORY"] = "71";
    ProtocolErrors["INVALID_UNBACKED_MINT_CAP"] = "72";
    ProtocolErrors["INVALID_DEBT_CEILING"] = "73";
    ProtocolErrors["INVALID_RESERVE_INDEX"] = "74";
    ProtocolErrors["ACL_ADMIN_CANNOT_BE_ZERO"] = "75";
    ProtocolErrors["INCONSISTENT_PARAMS_LENGTH"] = "76";
    ProtocolErrors["ZERO_ADDRESS_NOT_VALID"] = "77";
    ProtocolErrors["INVALID_EXPIRATION"] = "78";
    ProtocolErrors["INVALID_SIGNATURE"] = "79";
    ProtocolErrors["OPERATION_NOT_SUPPORTED"] = "80";
    ProtocolErrors["DEBT_CEILING_NOT_ZERO"] = "81";
    ProtocolErrors["ASSET_NOT_LISTED"] = "82";
    ProtocolErrors["INVALID_OPTIMAL_USAGE_RATIO"] = "83";
    ProtocolErrors["INVALID_OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO"] = "84";
    ProtocolErrors["UNDERLYING_CANNOT_BE_RESCUED"] = "85";
    ProtocolErrors["ADDRESSES_PROVIDER_ALREADY_ADDED"] = "86";
    ProtocolErrors["POOL_ADDRESSES_DO_NOT_MATCH"] = "87";
    ProtocolErrors["STABLE_BORROWING_ENABLED"] = "88";
    ProtocolErrors["SILOED_BORROWING_VIOLATION"] = "89";
    ProtocolErrors["RESERVE_DEBT_NOT_ZERO"] = "90";
    ProtocolErrors["FLASHLOAN_DISABLED"] = "91";
    // SafeCast
    ProtocolErrors["SAFECAST_UINT128_OVERFLOW"] = "SafeCast: value doesn't fit in 128 bits";
    // Ownable
    ProtocolErrors["OWNABLE_ONLY_OWNER"] = "Ownable: caller is not the owner";
    // ERC20
    ProtocolErrors["ERC20_TRANSFER_AMOUNT_EXCEEDS_BALANCE"] = "ERC20: transfer amount exceeds balance";
    // old
    ProtocolErrors["INVALID_FROM_BALANCE_AFTER_TRANSFER"] = "Invalid from balance after transfer";
    ProtocolErrors["INVALID_TO_BALANCE_AFTER_TRANSFER"] = "Invalid from balance after transfer";
    ProtocolErrors["INVALID_HF"] = "Invalid health factor";
})(ProtocolErrors = exports.ProtocolErrors || (exports.ProtocolErrors = {}));
var TokenContractId;
(function (TokenContractId) {
    TokenContractId["DAI"] = "DAI";
    TokenContractId["AAVE"] = "AAVE";
    TokenContractId["TUSD"] = "TUSD";
    TokenContractId["BAT"] = "BAT";
    TokenContractId["WETH"] = "WETH";
    TokenContractId["USDC"] = "USDC";
    TokenContractId["USDT"] = "USDT";
    TokenContractId["SUSD"] = "SUSD";
    TokenContractId["ZRX"] = "ZRX";
    TokenContractId["MKR"] = "MKR";
    TokenContractId["WBTC"] = "WBTC";
    TokenContractId["LINK"] = "LINK";
    TokenContractId["KNC"] = "KNC";
    TokenContractId["MANA"] = "MANA";
    TokenContractId["REN"] = "REN";
    TokenContractId["SNX"] = "SNX";
    TokenContractId["BUSD"] = "BUSD";
    TokenContractId["USD"] = "USD";
    TokenContractId["YFI"] = "YFI";
    TokenContractId["UNI"] = "UNI";
    TokenContractId["ENJ"] = "ENJ";
    TokenContractId["UniDAIWETH"] = "UniDAIWETH";
    TokenContractId["UniWBTCWETH"] = "UniWBTCWETH";
    TokenContractId["UniAAVEWETH"] = "UniAAVEWETH";
    TokenContractId["UniBATWETH"] = "UniBATWETH";
    TokenContractId["UniDAIUSDC"] = "UniDAIUSDC";
    TokenContractId["UniCRVWETH"] = "UniCRVWETH";
    TokenContractId["UniLINKWETH"] = "UniLINKWETH";
    TokenContractId["UniMKRWETH"] = "UniMKRWETH";
    TokenContractId["UniRENWETH"] = "UniRENWETH";
    TokenContractId["UniSNXWETH"] = "UniSNXWETH";
    TokenContractId["UniUNIWETH"] = "UniUNIWETH";
    TokenContractId["UniUSDCWETH"] = "UniUSDCWETH";
    TokenContractId["UniWBTCUSDC"] = "UniWBTCUSDC";
    TokenContractId["UniYFIWETH"] = "UniYFIWETH";
    TokenContractId["BptWBTCWETH"] = "BptWBTCWETH";
    TokenContractId["BptBALWETH"] = "BptBALWETH";
    TokenContractId["WMATIC"] = "WMATIC";
    TokenContractId["STAKE"] = "STAKE";
    TokenContractId["xSUSHI"] = "xSUSHI";
})(TokenContractId = exports.TokenContractId || (exports.TokenContractId = {}));
var RateMode;
(function (RateMode) {
    RateMode["None"] = "0";
    RateMode["Stable"] = "1";
    RateMode["Variable"] = "2";
})(RateMode = exports.RateMode || (exports.RateMode = {}));
