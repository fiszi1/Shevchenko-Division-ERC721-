import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Shevchenko',
  tokenName: 'SHEVCHENKO_DIVISION',
  tokenSymbol: 'SVCHNK',
  hiddenMetadataUri:
    "ipfs://Qmb7TDAKhtidGUE85LRntioMhm7WGS1ZiFsjx59DnWrRK1/metadata.json",
  maxSupply: 8,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x8fF376e4AEBE1A9B19150d7f31666785C94774Ef",
  marketplaceIdentifier: 'Shevchenko division',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
