import { HardhatNetworkForkingUserConfig } from 'hardhat/types';
import { iParamsPerNetwork } from './helpers/types';
export declare const buildForkConfig: () => HardhatNetworkForkingUserConfig | undefined;
export declare const NETWORKS_RPC_URL: iParamsPerNetwork<string>;
export declare const BLOCK_TO_FORK: iParamsPerNetwork<number | undefined>;
//# sourceMappingURL=helper-hardhat-config.d.ts.map