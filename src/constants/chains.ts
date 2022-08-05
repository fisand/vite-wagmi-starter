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
    address: '0x6e5BB1a5Ad6F68A8D7D6A5e47750eC15773d6042',
    blockCreated: 1802960,
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
    address: '0xC50F4c1E81c873B2204D7eFf7069Ffec6Fbe136D',
    blockCreated: 9316063,
  },
  testnet: false,
}
