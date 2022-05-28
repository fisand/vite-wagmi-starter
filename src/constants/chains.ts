import type { Chain } from "wagmi"

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
  testnet: false,
}
