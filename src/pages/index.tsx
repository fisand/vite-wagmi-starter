import { formatAmount } from '@did-network/dapp-sdk'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAccount, useBalance } from 'wagmi'

import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { WalletModal } from '@/components/WalletModal'
import { useWagmi } from '@/hooks'

const Home = () => {
  const navigator = useNavigate()
  const { address } = useAccount()
  const { data: balance } = useBalance({
    addressOrName: address,
  })

  const [show, setShow] = useState(false)

  const onCancel = () => {
    setShow(false)
  }

  return (
    <div className="App relative p-4 lt-md:p-8 min-h-screen flex-col-center">
      <a
        href="https://github.com/fisand/vite-antd-seed"
        target="_blank"
        className="absolute top-6 right-10 text-#aaa hover:text-black"
      >
        <span className="inline-flex w-8 h-8 i-carbon:logo-github"></span>
      </a>
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
        {' | '}
        <a onClick={() => navigator('/about')}>About</a>
      </p>
      <p>
        {['', '', '', ''].map((_, index) => (
          <Item key={index} />
        ))}
      </p>
      <WalletModal visible={show} onCancel={onCancel} />
    </div>
  )
}

export default Home

function Item() {
  const { status } = useWagmi()

  return <span></span>
}
