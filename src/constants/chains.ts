import type { Chain } from 'wagmi'

export const BSCTest: Chain = {
  id: 97,
  network: 'bsc-test',
  name: 'Binance Chain Test Network',
  nativeCurrency: { name: 'BSC', symbol: 'tBNB', decimals: 18 },
  rpcUrls: {
    default: 'https://data-seed-prebsc-2-s2.binance.org:8545/',
  },
  blockExplorers: {
    etherscan: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://testnet.bscscan.com',
    },
    default: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://testnet.bscscan.com',
    },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const BSC: Chain = {
  id: 56,
  network: 'bsc',
  name: 'Binance Smart Chain',
  nativeCurrency: { name: 'BSC', symbol: 'BNB', decimals: 18 },
  rpcUrls: {
    default: 'https://bsc-mainnet.nodereal.io/v1/6100900f021e4eefb6a7d557996f4a23',
  },
  blockExplorers: {
    etherscan: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://bscscan.com',
    },
    default: {
      name: 'BNB Smart Chain Explorer',
      url: 'https://bscscan.com',
    },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
  testnet: false,
}
