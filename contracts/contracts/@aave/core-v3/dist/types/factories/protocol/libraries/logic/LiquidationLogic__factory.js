"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "collateralAsset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "debtAsset",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "debtToCover",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "liquidatedCollateralAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "liquidator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "receiveAToken",
                type: "bool",
            },
        ],
        name: "LiquidationCall",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "reserve",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "ReserveUsedAsCollateralDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "reserve",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "ReserveUsedAsCollateralEnabled",
        type: "event",
    },
    {
        inputs: [],
        name: "CLOSE_FACTOR_HF_THRESHOLD",
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
        name: "MAX_LIQUIDATION_CLOSE_FACTOR",
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
const _bytecode = "0x61402261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806383c1087d14610050578063a18964a514610072578063d246754414610093575b600080fd5b81801561005c57600080fd5b5061007061006b366004613aea565b61009c565b005b610081670d2f13f7789f000081565b60405190815260200160405180910390f35b61008161271081565b6100a46138e5565b60408083015173ffffffffffffffffffffffffffffffffffffffff9081166000908152602089815283822060608701518416835284832060808801519094168352908890529290206100f582610832565b6101608501819052610108908390610a4b565b61018e8989886040518060a001604052808660405180602001604052908160008201548152505081526020018a6000015181526020018a6080015173ffffffffffffffffffffffffffffffffffffffff1681526020018a60c0015173ffffffffffffffffffffffffffffffffffffffff1681526020018a60e0015160ff16815250610ad6565b5060c089018190526101608901516101ad955093508992509050611040565b86602001876040018860600183815250838152508381525050505061021b818460405180608001604052808861016001518152602001886040015181526020018860c00151815260200189610100015173ffffffffffffffffffffffffffffffffffffffff168152506110c6565b610226868487611575565b60a088015273ffffffffffffffffffffffffffffffffffffffff908116610120880152908116610100870152908116610140860181905260808701516040517f70a0823100000000000000000000000000000000000000000000000000000000815292166004830152906370a0823190602401602060405180830381865afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190613bf3565b808552610160850151610100860151610120870151606088015160a089015160c08b015161030f968a969594939290916116a9565b60e08701526060860181905260808601919091526040850151141561035d57600382015461035d9082907501000000000000000000000000000000000000000000900461ffff166000611a09565b835160e085015160808601516103739190613c3b565b141561040b5760038301546103a89082907501000000000000000000000000000000000000000000900461ffff166000611a9e565b846080015173ffffffffffffffffffffffffffffffffffffffff16856040015173ffffffffffffffffffffffffffffffffffffffff167f44c58d81365b66dd4b1a7f36c25aa97b8c71c361ee4937adc1a00000227db5dd60405160405180910390a35b6104158585611b27565b6101608401516060808701519086015161043492859290916000611db8565b61044a89898387610160015188606001516120f9565b8460a001511561046757610462898989868989612301565b610472565b61047283868661250d565b60e08401511561067c576000610487846125e5565b905060006104a2828760e0015161267c90919063ffffffff16565b61014087015160808901516040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152929350600092911690631da24f3e90602401602060405180830381865afa15801561051f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105439190613bf3565b90508082111561055d5761055781846126bb565b60e08801525b86610140015173ffffffffffffffffffffffffffffffffffffffff1663f866c319896080015189610140015173ffffffffffffffffffffffffffffffffffffffff1663ae1673356040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f79190613c53565b8a60e001516040518463ffffffff1660e01b81526004016106469392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600060405180830381600087803b15801561066057600080fd5b505af1158015610674573d6000803e3d6000fd5b505050505050505b6106bb338561016001516101e001518660600151886060015173ffffffffffffffffffffffffffffffffffffffff16612712909392919063ffffffff16565b6101608401516101e00151608086015160608601516040517f6fd9767600000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff92831660248201526044810191909152911690636fd9767690606401600060405180830381600087803b15801561074757600080fd5b505af115801561075b573d6000803e3d6000fd5b50505050846080015173ffffffffffffffffffffffffffffffffffffffff16856060015173ffffffffffffffffffffffffffffffffffffffff16866040015173ffffffffffffffffffffffffffffffffffffffff167fe413a321e8681d831f4dbccbca790d2952b56f977908e45be37335533e00528687606001518860800151338b60a0015160405161081f9493929190938452602084019290925273ffffffffffffffffffffffffffffffffffffffff1660408301521515606082015260800190565b60405180910390a4505050505050505050565b61083a61398d565b61084261398d565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546fffffffffffffffffffffffffffffffff808216610100840181905260e0840152600285015480821661014085018190526101208501527001000000000000000000000000000000009283900482166101608501528290041661018083015260048085015473ffffffffffffffffffffffffffffffffffffffff9081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff16610240840152604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905163b1bf962d928281019260209291908290030181865afa15801561096f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109939190613bf3565b816020018181525081600001818152505080610200015173ffffffffffffffffffffffffffffffffffffffff1663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa1580156109f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a189190613c70565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b60038201544264ffffffffff908116700100000000000000000000000000000000909204161415610a7a575050565b610a8482826127ed565b610a8e828261290f565b5060030180547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004264ffffffffff1602179055565b600080600080600080610aec8760000151511590565b15610b285750600094508493508392508291507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff905081611033565b610bd760405180610260016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581525090565b608088015160ff1615610c1c57608088015160ff16600090815260208a9052604090206060890151610c099190612a8f565b6101808401526101c08301526101a08201525b87602001518160c001511015610f3b5760c08101518851610c3c91612b6e565b610c505760c0810180516001019052610c1c565b60c0810151600090815260208b9052604090205473ffffffffffffffffffffffffffffffffffffffff166102008201819052610c965760c0810180516001019052610c1c565b61020081015173ffffffffffffffffffffffffffffffffffffffff16600090815260208c8152604091829020825180830190935280549283905260ff60a884901c81166101e0860152603084901c166060850181905261ffff601085901c811660a08701529093166080850152600a9290920a9083015261018082015115801590610d2c5750816101e00151896080015160ff16145b610dd05760608901516102008301516040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169063b3596f0790602401602060405180830381865afa158015610da7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcb9190613bf3565b610dd7565b8161018001515b825260a082015115801590610df7575060c08201518951610df791612bf6565b15610ee757610e1489604001518284600001518560200151612c7a565b6040830181905261010083018051610e2d908390613c3b565b90525060808901516101e0830151610e489160ff1690612d55565b1515610240830152608082015115610e9e57816102400151610e6e578160800151610e75565b816101a001515b8260400151610e849190613cbb565b8261014001818151610e969190613c3b565b905250610ea7565b60016102208301525b816102400151610ebb578160a00151610ec2565b816101c001515b8260400151610ed19190613cbb565b8261016001818151610ee39190613c3b565b9052505b60c08201518951610ef791612d66565b15610f2a57610f1489604001518284600001518560200151612de8565b8261012001818151610f269190613c3b565b9052505b5060c0810180516001019052610c1c565b610100810151610f4c576000610f67565b80610100015181610140015181610f6557610f65613cf8565b045b610140820152610100810151610f7e576000610f99565b80610100015181610160015181610f9757610f97613cf8565b045b61016082015261012081015115610fdb57610fd6816101200151610fd0836101600151846101000151612f6890919063ffffffff16565b90612fab565b610ffd565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b60e0820181905261010082015161012083015161014084015161016085015161022090950151929a509098509650919450925090505b9499939850945094509450565b6000806000806000611056876080015189612fe2565b909250905060006110678284613c3b565b90506000670d2f13f7789f0000881161108257612710611086565b6113885b905060006110948383612f68565b90506000818b60200151116110ad578a602001516110af565b815b949850929650929450505050505b93509350939050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915260408051602081019091528354815261114c9051670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b1515602086015250505015801580835283516101c0015151671000000000000000811615156060850152670100000000000000161515604084015290611193575080604001515b6040518060400160405280600281526020017f32370000000000000000000000000000000000000000000000000000000000008152509061120a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b60405180910390fd5b50806020015115801561121f57508060600151155b6040518060400160405280600281526020017f32390000000000000000000000000000000000000000000000000000000000008152509061128d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50606082015173ffffffffffffffffffffffffffffffffffffffff1615806112c05750670d2f13f7789f00008260400151105b806113395750816060015173ffffffffffffffffffffffffffffffffffffffff16637a5d20ea6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611315573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113399190613d9a565b6040518060400160405280600281526020017f3539000000000000000000000000000000000000000000000000000000000000815250906113a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50670de0b6b3a76400008260400151106040518060400160405280600281526020017f343500000000000000000000000000000000000000000000000000000000000081525090611425576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50604080516020810190915283549081905260101c61ffff161580159061148157506003830154604080516020810190915285548152611481917501000000000000000000000000000000000000000000900461ffff16612bf6565b15156080820181905260408051808201909152600281527f34360000000000000000000000000000000000000000000000000000000000006020820152906114f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b508160200151600014156040518060400160405280600281526020017f34370000000000000000000000000000000000000000000000000000000000008152509061156e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b5050505050565b6004820154604080516020808201835285549182905291840151606085015160e086015160009586958695869573ffffffffffffffffffffffffffffffffffffffff90931694911c61ffff169260ff16156116985760e08901805160ff908116600090815260208e815260409182902054935182519182019092528d5490819052660100000000000090930473ffffffffffffffffffffffffffffffffffffffff169261162c929182169160a89190911c16612d55565b156116765760e08a015160ff16600090815260208d90526040902054640100000000900461ffff16935073ffffffffffffffffffffffffffffffffffffffff811615611676578092505b73ffffffffffffffffffffffffffffffffffffffff811615611696578091505b505b929a90995091975095509350505050565b6000806000611719604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b8116600483015286169063b3596f0790602401602060405180830381865afa158015611785573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a99190613bf3565b81526040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116600483015286169063b3596f0790602401602060405180830381865afa158015611817573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183b9190613bf3565b6020828101919091526040805191820190528c549081905260301c60ff1660c08201526101c08b01515160301c60ff1660a0820181905260c0820151600a90810a60e08401520a61010082015260408051602081019091528c549081905260981c61ffff1661016082015261010081015181516118b89190613cbb565b8160e001518983602001516118cd9190613cbb565b6118d79190613cbb565b6118e19190613db7565b606082018190526118f29087612f68565b6040820181905287101561195f57610120810187905260e081015160208201516119549188916119229190613cbb565b610100840151610120850151855161193a9190613cbb565b6119449190613cbb565b61194e9190613db7565b9061311f565b610140820152611973565b604081015161012082015261014081018890525b610160810151156119e55761012081015161198e908761311f565b81610120015161199e9190613df2565b608082018190526101608201516119b59190612f68565b61018082018190526101208201516119cd9190613df2565b816101400151826101800151935093509350506119fb565b8061012001518161014001516000935093509350505b985098509895505050505050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260808310611a78576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50600182811b1b8115611a9057835481178455611a98565b835481191684555b50505050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260808310611b0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50600182811b81011b8115611a9057835481178455611a98565b8060600151816020015110611bff5761016081015161022081015160808401516060840151610140909301516040517ff5298aca00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482015260248101949094526044840152169063f5298aca906064016020604051808303816000875af1158015611bcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bf19190613bf3565b610160820151602001525050565b602081015115611ccf5761016081015161022081015160808401516020840151610140909301516040517ff5298aca00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482015260248101949094526044840152169063f5298aca906064016020604051808303816000875af1158015611ca0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc49190613bf3565b610160820151602001525b806101600151610200015173ffffffffffffffffffffffffffffffffffffffff16639dc29fac836080015183602001518460600151611d0e9190613df2565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff9092166004830152602482015260440160408051808303816000875af1158015611d7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611da19190613e09565b61016083015160a081019190915260c001525b5050565b611de36040518060800160405280600081526020016000815260200160008152602001600081525090565b6101408501516020860151611df7916126bb565b60608083019182526007880154604080516101208101825260088b01546fffffffffffffffffffffffffffffffff7001000000000000000000000000000000009091041681526020810188905280820187905260c0808b0151948201949094529351608085015260a0808a0151908501526101a08901519284019290925273ffffffffffffffffffffffffffffffffffffffff87811660e08501526101e0890151811661010085015291517fa589870900000000000000000000000000000000000000000000000000000000815291169163a589870991611f589190600401600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015173ffffffffffffffffffffffffffffffffffffffff80821660e0850152610100915080828601511682850152505092915050565b606060405180830381865afa158015611f75573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f999190613e2d565b60408401526020830152808252611faf9061314a565b6001870180546fffffffffffffffffffffffffffffffff9283167001000000000000000000000000000000000292169190911790556020810151611ff29061314a565b6003870180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9290921691909117905560408101516120439061314a565b6002870180546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905580516020808301516040808501516101008a01516101408b0151835196875294860193909352908401526060830152608082015273ffffffffffffffffffffffffffffffffffffffff8516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b60408051602081019091528354815260009081906121189088886131f0565b509150915081156122f85773ffffffffffffffffffffffffffffffffffffffff81166000908152602088905260408120600901546101c0860151516fffffffffffffffffffffffffffffffff909116919061219a9060029060301c60ff166121809190613df2565b61218b90600a613f7b565b6121959087613db7565b61314a565b9050806fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff161161224a5773ffffffffffffffffffffffffffffffffffffffff8316600081815260208b8152604080832060090180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055519182527faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a26122f5565b60006122568284613f87565b73ffffffffffffffffffffffffffffffffffffffff8516600081815260208d815260409182902060090180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff959095169485179055905183815292935090917faef84d3b40895fd58c561f3998000f0583abb992a52fbdc99ace8e8de4d676a5910160405180910390a2505b50505b50505050505050565b6101408101516040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015612373573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123979190613bf3565b610140830151608080860151908501516040517ff866c31900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff92831660048201523360248201526044810191909152929350169063f866c31990606401600060405180830381600087803b15801561242057600080fd5b505af1158015612434573d6000803e3d6000fd5b5050505080600014156122f85733600090815260208681526040918290208251918201909252855481526004860154612488918a918a91859173ffffffffffffffffffffffffffffffffffffffff166132a5565b156125035760038501546124bc9082907501000000000000000000000000000000000000000000900461ffff166001611a9e565b6040808501519051339173ffffffffffffffffffffffffffffffffffffffff16907e058a56ea94653cdf4f152d227ace22d4c00ad99e2a43f58cb7d9e3feb295f290600090a35b5050505050505050565b600061251884610832565b90506125248482610a4b565b6040830151608083015161253f918691849190600090611db8565b610140820151608080850151908401516101008401516040517fd7020d0a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff93841660048201523360248201526044810192909252606482015291169063d7020d0a90608401600060405180830381600087803b1580156125d157600080fd5b505af1158015612503573d6000803e3d6000fd5b6003810154600090700100000000000000000000000000000000900464ffffffffff164281141561262b575050600101546fffffffffffffffffffffffffffffffff1690565b600183015461266f906fffffffffffffffffffffffffffffffff808216916126699170010000000000000000000000000000000090910416846134e7565b906126bb565b9392505050565b50919050565b600081156b033b2e3c9fd0803ce8000000600284041904841117156126a057600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff839004841115176126f057600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8581166004840152841660248301526044820183905290600080606483828a5af161277d573d6000803e3d6000fd5b5061278785613524565b61156e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401611201565b6101608101511561287d57600061280e8261016001518361024001516134e7565b90506128278260e00151826126bb90919063ffffffff16565b61010083018190526128389061314a565b6001840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b805115611db457600061289a8261018001518361024001516135ee565b90506128b4826101200151826126bb90919063ffffffff16565b61014083018190526128c59061314a565b6002840180546fffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909216919091179055505050565b6129486040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6101a082015161295757505050565b6101208201518251612968916126bb565b6020820152610140820151825161297e916126bb565b604082015260608201516102608301516102408401516129a692919064ffffffffff166135f7565b6060820181905260408301516129bb916126bb565b8082526020820151608084015160408401516129d79190613c3b565b6129e19190613df2565b6129eb9190613df2565b608082018190526101a0830151612a029190612f68565b60a0820181905215612a8a57612a2d6121958361010001518360a0015161267c90919063ffffffff16565b600884018054600090612a539084906fffffffffffffffffffffffffffffffff16613fb8565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b505050565b81546000908190819081906601000000000000900473ffffffffffffffffffffffffffffffffffffffff168015612b53576040517fb3596f0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff828116600483015287169063b3596f0790602401602060405180830381865afa158015612b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b509190613bf3565b91505b50945461ffff80821697620100009092041695945092505050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310612be0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50508151600182901b1c60031615155b92915050565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310612c68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50509051600191821b82011c16151590565b600080612c86856125e5565b6004868101546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a8116938201939093529293506000928792612d2c928692911690631da24f3e90602401602060405180830381865afa158015612d08573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126699190613bf3565b612d369190613cbb565b9050838181612d4757612d47613cf8565b04925050505b949350505050565b6000821580159061266f5750501490565b60408051808201909152600281527f3734000000000000000000000000000000000000000000000000000000000000602082015260009060808310612dd8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112019190613d27565b50509051600191821b1c16151590565b60068301546040517f1da24f3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301526000928392911690631da24f3e90602401602060405180830381865afa158015612e5e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612e829190613bf3565b90508015612ea057612e9d612e968661373e565b82906126bb565b90505b60058501546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152909116906370a0823190602401602060405180830381865afa158015612f12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612f369190613bf3565b612f409082613c3b565b9050612f4c8185613cbb565b9050828181612f5d57612f5d613cf8565b049695505050505050565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517612f9d57600080fd5b506127109102611388010490565b60008115670de0b6b3a764000060028404190484111715612fcb57600080fd5b50670de0b6b3a76400009190910260028204010490565b6102008101516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260009283929116906370a0823190602401602060405180830381865afa158015613059573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061307d9190613bf3565b6102208401516040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152909116906370a0823190602401602060405180830381865afa1580156130f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131149190613bf3565b915091509250929050565b600081156127106002840419048411171561313957600080fd5b506127109190910260028204010490565b60006fffffffffffffffffffffffffffffffff8211156131ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401611201565b5090565b60008060006131fe866137c2565b1561329557600061322f877faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa613806565b6000818152602087815260408083205473ffffffffffffffffffffffffffffffffffffffff168084528a8352818420825193840190925290549182905292935060d41c64ffffffffff1690508015613291576001955090935091506110bd9050565b5050505b5060009586955085945092505050565b815160009060d41c64ffffffffff16156134cf5760008273ffffffffffffffffffffffffffffffffffffffff16637535d2466040518163ffffffff1660e01b8152600401602060405180830381865afa158015613306573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061332a9190613c53565b73ffffffffffffffffffffffffffffffffffffffff16630542975c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613374573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133989190613c53565b90508073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa1580156133e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134099190613c53565b6040517f91d148540000000000000000000000000000000000000000000000000000000081527fd1d2cf869016112a9af1107bcf43c3759daf22cf734aad47d0c9c726e33bc782600482015233602482015273ffffffffffffffffffffffffffffffffffffffff91909116906391d1485490604401602060405180830381865afa15801561349b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134bf9190613d9a565b6134cd5760009150506134de565b505b6134db8686868661384a565b90505b95945050505050565b6000806134fb64ffffffffff841642613df2565b6135059085613cbb565b6301e1338090049050612d4d816b033b2e3c9fd0803ce8000000613c3b565b6000613564565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d80156135a357602081146135dd5761359e7f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f61352b565b612676565b823b6135d4576135d47f475076323a206e6f74206120636f6e7472616374000000000000000000000000601461352b565b60019150612676565b3d6000803e50506000511515919050565b600061266f8383425b60008061360b64ffffffffff851684613df2565b905080613627576b033b2e3c9fd0803ce800000091505061266f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101600080806002851161365d576000613662565b600285035b925066038882915c40006136768a806126bb565b8161368357613683613cf8565b0491506301e13380613695838b6126bb565b816136a2576136a2613cf8565b0490506000826136b28688613cbb565b6136bc9190613cbb565b600290049050600082856136d0888a613cbb565b6136da9190613cbb565b6136e49190613cbb565b60069004905080826301e133806136fb8a8f613cbb565b6137059190613db7565b61371b906b033b2e3c9fd0803ce8000000613c3b565b6137259190613c3b565b61372f9190613c3b565b9b9a5050505050505050505050565b6003810154600090700100000000000000000000000000000000900464ffffffffff1642811415613784575050600201546fffffffffffffffffffffffffffffffff1690565b600283015461266f906fffffffffffffffffffffffffffffffff808216916126699170010000000000000000000000000000000090910416846135ee565b80516000907faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa16801580159061266f57506137fe600182613df2565b161592915050565b815160009082167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8101198116825b60029190911c9081156134de57600101613835565b6000613858825161ffff1690565b61386457506000612d4d565b60408051602081019091528354908190527faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa166138a357506001612d4d565b6040805160208101909152835481526000906138c09087876131f0565b50509050801580156138db5750825160d41c64ffffffffff16155b9695505050505050565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200161398861398d565b905290565b6040518061028001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001613a116040518060200160405280600081525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b604051610120810167ffffffffffffffff81118282101715613a85577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b73ffffffffffffffffffffffffffffffffffffffff81168114613aad57600080fd5b50565b8035613abb81613a8b565b919050565b8015158114613aad57600080fd5b8035613abb81613ac0565b803560ff81168114613abb57600080fd5b60008060008060008587036101a0811215613b0457600080fd5b86359550602087013594506040870135935060608701359250610120807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8083011215613b4f57600080fd5b613b57613a3a565b91506080880135825260a08801356020830152613b7660c08901613ab0565b6040830152613b8760e08901613ab0565b6060830152610100613b9a818a01613ab0565b6080840152613baa828a01613ace565b60a0840152613bbc6101408a01613ab0565b60c0840152613bce6101608a01613ad9565b60e0840152613be06101808a01613ab0565b9083015250949793965091945092919050565b600060208284031215613c0557600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115613c4e57613c4e613c0c565b500190565b600060208284031215613c6557600080fd5b815161266f81613a8b565b60008060008060808587031215613c8657600080fd5b845193506020850151925060408501519150606085015164ffffffffff81168114613cb057600080fd5b939692955090935050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613cf357613cf3613c0c565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600060208083528351808285015260005b81811015613d5457858101830151858201604001528201613d38565b81811115613d66576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600060208284031215613dac57600080fd5b815161266f81613ac0565b600082613ded577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600082821015613e0457613e04613c0c565b500390565b60008060408385031215613e1c57600080fd5b505080516020909101519092909150565b600080600060608486031215613e4257600080fd5b8351925060208401519150604084015190509250925092565b600181815b80851115613eb457817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613e9a57613e9a613c0c565b80851615613ea757918102915b93841c9390800290613e60565b509250929050565b600082613ecb57506001612bf0565b81613ed857506000612bf0565b8160018114613eee5760028114613ef857613f14565b6001915050612bf0565b60ff841115613f0957613f09613c0c565b50506001821b612bf0565b5060208310610133831016604e8410600b8410161715613f37575081810a612bf0565b613f418383613e5b565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115613f7357613f73613c0c565b029392505050565b600061266f8383613ebc565b60006fffffffffffffffffffffffffffffffff83811690831681811015613fb057613fb0613c0c565b039392505050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115613fe357613fe3613c0c565b0194935050505056fea26469706673582212208819d8d67e5210d15875395eea6e108ee441e6517f69fdc9e32bf323a9621da064736f6c634300080a0033";
const isSuperArgs = (xs) => xs.length > 1;
class LiquidationLogic__factory extends ethers_1.ContractFactory {
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
exports.LiquidationLogic__factory = LiquidationLogic__factory;
LiquidationLogic__factory.bytecode = _bytecode;
LiquidationLogic__factory.abi = _abi;
