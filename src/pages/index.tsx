import { Button } from 'antd'
import { useEthers, shortenAddress } from '@usedapp/core'

const Home = () => {
  const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <div className="App p-4 lt-md:p-8 min-h-screen flex flex-col  items-center">
      <p className="text-3xl font-bold underline hover:text-blue-300">Hello Vite + React + Antd Dapp!</p>
      <p>{account && shortenAddress(account)}</p>
      <p className='flex gap-4'>
        <Button type="primary" onClick={activateBrowserWallet}>
          connect
        </Button>
        <Button type="primary" onClick={deactivate}>
          disconnect
        </Button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
      <p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
      </p>
    </div>
  )
}

export default Home
