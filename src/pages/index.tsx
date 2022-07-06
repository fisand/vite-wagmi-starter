import { formatAmount } from '@did-network/dapp-sdk'
import { Button } from 'antd'
import { useAccount, useBalance } from 'wagmi'

import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { WalletModal } from '@/components/WalletModal'

const Home = () => {
  const { address } = useAccount()

  const { data: balance } = useBalance({
    addressOrName: address,
  })

  const [show, setShow] = useState(false)

  const onCancel = () => {
    setShow(false)
  }

  return (
    <div className="App p-4 lt-md:p-8 min-h-screen flex-col-center">
      <a href="https://github.com/zouhangwithsweet" target="_blank">
        <img
          src="https://zouhaha-blog-next.vercel.app/logo.png"
          alt=""
          className="w-32 rounded-full mb-10 shadow hover:shadow-blue-300"
        />
      </a>
      <p className="text-3xl font-bold underline hover:text-blue-300">Hello Vite + React + Antd Dapp!</p>
      <p className="text-center">
        {address} <br /> {formatAmount(balance?.formatted)}
      </p>
      <p className="flex gap-4">
        <Button type="primary" onClick={() => setShow(true)} className="flex items-center">
          {address ? 'disconnect' : 'connect'} <span className="i-carbon:cookie"></span>
        </Button>
      </p>
      <div>
        <NetworkSwitcher />
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
      <WalletModal visible={show} onCancel={onCancel} />
    </div>
  )
}

export default Home
