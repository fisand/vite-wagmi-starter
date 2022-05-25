import { Button } from 'antd'
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { formatAmount } from '@did-network/dapp-sdk'
import { NetworkSwitcher } from '@/components/SwitchNetworks'

const Home = () => {
  const { data: account} = useAccount({
    suspense: undefined,
  })
  const { connect, connectors } = useConnect()

  const { disconnect } = useDisconnect()

  const { data: balance } = useBalance({
    addressOrName: account?.address,
    // watch: true,
  })

  useEffect(() => {
    console.log(account?.address)
  }, [account])

  return (
    <div className="App p-4 lt-md:p-8 min-h-screen flex-col-center">
      <a href="https://github.com/zouhangwithsweet" target="_blank">
        <img src="https://zouhaha-blog-next.vercel.app/logo.png" alt="" className="w-32 rounded-full mb-10 shadow hover:shadow-blue-300" />
      </a>
      <p className="text-3xl font-bold underline hover:text-blue-300">Hello Vite + React + Antd Dapp!</p>
      <p className="text-center">
        {account?.address} <br /> {formatAmount(balance?.formatted)}
      </p>
      <p className="flex gap-4">
        <Button type="primary" onClick={() => connect(connectors[0])} className="flex items-center">
          connect <span className="i-carbon:chart-spiral"></span>
        </Button>
        <Button type="primary" onClick={() => disconnect()} className="flex items-center">
          disconnect <span className="i-carbon:cookie"></span>
        </Button>
      </p>
      <div>
        <NetworkSwitcher/>
      </div>
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
