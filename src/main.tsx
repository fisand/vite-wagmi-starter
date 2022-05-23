import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import type { Chain } from 'wagmi'

import './assets/styles/index.less'
import App from './App'

import 'uno.css'
import '@unocss/reset/normalize.css'

console.table(import.meta.env)

const BSCTest: Chain = {
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

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.arbitrum, chain.polygon, BSCTest, chain.rinkeby],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

ReactDOM.render(
  <WagmiConfig client={client}>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </WagmiConfig>,
  document.getElementById('root')
)
