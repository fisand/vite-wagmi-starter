import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import './assets/styles/index.less'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
