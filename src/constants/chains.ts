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
  // todo confirm ?
  multicall: {
    address: '0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C',
    blockCreated: 4613947,
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
    address: '0x41263cba59eb80dc200f3e2544eda4ed6a90e76c',
    blockCreated: 6564393,
  },
  testnet: false,
}
