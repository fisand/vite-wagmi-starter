import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import './assets/styles/index.less'
import './index.css'
import App from './App'

console.table(import.meta.env)

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
)
