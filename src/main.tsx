import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'

import App from './App'
import { BSC, BSCTest } from '@/constants'

import './assets/styles/index.less'

import 'uno.css'
import '@unocss/reset/normalize.css'

console.table(import.meta.env)

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.arbitrum, chain.polygon, BSCTest, BSC, chain.rinkeby],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
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
