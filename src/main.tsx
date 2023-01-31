import { ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, arbitrumGoerli, bsc, bscTestnet, goerli, mainnet, polygon } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

import App from './App'

import './index.css'
import 'antd/dist/reset.css'
import 'uno.css'
import '@unocss/reset/normalize.css'

console.table(import.meta.env)

const { chains, provider, webSocketProvider } = configureChains(
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
  <WagmiConfig client={client}>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </WagmiConfig>
)
