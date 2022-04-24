import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { DAppProvider, Mainnet } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'
import './assets/styles/index.less'
import './index.css'
import App from './App'

console.table(import.meta.env)

ReactDOM.render(
  <DAppProvider config={{
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
    }
  }}>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </DAppProvider>,
  document.getElementById('root')
)
