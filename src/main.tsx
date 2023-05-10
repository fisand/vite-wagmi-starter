import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, arbitrumGoerli, bsc, bscTestnet, goerli, mainnet, polygon } from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

import App from './App'

import './index.css'
import '@unocss/reset/tailwind.css'
import 'uno.css'

console.table(import.meta.env)

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [arbitrum, arbitrumGoerli, bsc, bscTestnet, mainnet, polygon, goerli],
  [
    // publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== 97 && chain.id !== 56) return null
        return { http: chain.rpcUrls.default.http[0] }
      },
    }),
    publicProvider(),
  ]
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      options: {
        projectId: 'f18c88f1b8f4a066d3b705c6b13b71a8',
      },
    }),
    new WalletConnectLegacyConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'BitKeep',
        getProvider: () => (typeof window !== 'undefined' ? (window as any).bitkeep?.ethereum : undefined),
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

// ReactDOM.render(
//   <WagmiConfig client={client}>
//     <BrowserRouter>
//       <ConfigProvider
//         theme={{
//           token: {
//             colorPrimary: '#00b96b',
//           },
//         }}
//       >
//         <App />
//       </ConfigProvider>
//     </BrowserRouter>
//   </WagmiConfig>,
//   document.getElementById('root')
// )

const root = createRoot(document.getElementById('root')!)
root.render(
  <WagmiConfig config={config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WagmiConfig>
)
