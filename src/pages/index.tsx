import { formatAmount, shorten } from '@did-network/dapp-sdk'
import { useNavigate } from 'react-router-dom'
import { Button } from 'uno-ui/src/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from 'uno-ui/src/components/ui/card'
import { useToast } from 'uno-ui/src/components/ui/use-toast'
import { useAccount, useBalance } from 'wagmi'

import { Header } from '@/components/layout/Header'
import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { WalletModal } from '@/components/WalletModal'
import { useWagmi } from '@/hooks'
import { useCopyToClipboard } from '@/hooks/useCopy'

const Home = () => {
  const navigator = useNavigate()
  const { address } = useAccount()
  const { data: balance } = useBalance({
    address,
  })

  const [show, setShow] = useState(false)

  const toggleModal = (e: boolean) => {
    setShow(e)
  }

  const [_, copy] = useCopyToClipboard()
  const { toast, toasts } = useToast()

  const copyHandler = useCallback(() => {
    copy('pnpm dlx fisand')

    toast({
      title: 'Copied success!',
    })
  }, [copy, toast])

  return (
    <>
      <Header
        action={
          <>
            <NetworkSwitcher />
            <WalletModal open={show} onOpenChange={toggleModal} close={() => setShow(false)}>
              <Button className="flex items-center h-8 mr-4" size="sm">
                {address ? shorten(address) : 'Connect Wallet'}
              </Button>
            </WalletModal>
          </>
        }
      />
      <div className="relative max-w-6xl min-h-[calc(100vh-8rem)] m-auto pt-16 flex-col-center justify-start">
        <p
          className="font-bold bg-clip-text text-4xl lt-sm:text-2xl"
          style={
            {
              backgroundImage: 'linear-gradient(270deg, #B4EAA1 0%, #F8D07A 100%)',
              display: 'inline-block',
              lineHeight: 1,
              WebkitTextFillColor: 'transparent',
            } as any
          }
        >
          Unoi Dapp Template
        </p>
        <p className="mt-3 text-5xl text-center font-bold lt-sm:text-3xl">The better template to launch a Web3 dapp</p>
        <p className="mt-3 text-3xl text-center lt-sm:text-xl group">
          Designed for everyone. Built with wagmi{' '}
          <span className="i-logos:vitejs inline-flex w-5 h-5 -group-hover:rotate-30 transition-all" />{' '}
          <span className="i-logos:unocss inline-flex w-5 h-5 group-hover:rotate-23 transition-all" />.
        </p>
        <div className="mt-8 flex-center">
          <div className="m-auto py-2 px-8 flex-center bg-#666 rounded-full text-white">
            pnpm dlx fisand
            <span className="i-carbon:copy ml-6 cursor-pointer active:scale-95" onClick={copyHandler} />
          </div>
        </div>
        <div className="mt-16 max-w-6xl m-auto px-4 flex gap-8 flex-wrap items-stretch justify-center">
          <Card className="w-[320px] hover:shadow-#B4EAA1">
            <CardHeader>
              <CardTitle className="flex gap-1">
                <svg
                  className="h-4 w-auto fill-current"
                  viewBox="0 0 421 198"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.9961 119.99C47.9961 133.244 58.7404 143.988 71.9942 143.988H119.99C133.244 143.988 143.988 133.244 143.988 119.99V23.9981C143.988 10.7443 154.733 0 167.986 0C181.24 0 191.984 10.7443 191.984 23.9981V119.99C191.984 133.244 202.729 143.988 215.983 143.988H263.979C277.232 143.988 287.977 133.244 287.977 119.99V23.9981C287.977 10.7443 298.721 0 311.975 0C325.229 0 335.973 10.7443 335.973 23.9981V167.986C335.973 181.24 325.229 191.984 311.975 191.984H23.9981C10.7443 191.984 0 181.24 0 167.986L8.47642e-06 23.9981C9.4127e-06 10.7443 10.7443 0 23.9981 0C37.2518 0 47.9961 10.7443 47.9961 23.9981L47.9961 119.99ZM388.54 197.698C406.212 197.698 420.538 183.373 420.538 165.701C420.538 148.029 406.212 133.704 388.54 133.704C370.869 133.704 356.543 148.029 356.543 165.701C356.543 183.373 370.869 197.698 388.54 197.698Z"
                    fill="inherit"
                  ></path>
                </svg>
                Wagmi
              </CardTitle>
              <CardDescription>React Hooks for Ethereum</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-col gap-4">
                <span>20+ hooks</span>
                <span>Built-in wallet connectors</span>
                <span>TypeScript ready</span>
                <span className="i-lucide:more-horizontal h-4"></span>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[320px] hover:shadow-#B4EAA1">
            <CardHeader>
              <CardTitle className="flex gap-2">
                <span className="i-logos:vitejs inline-flex h-4 -group-hover:rotate-30 transition-all" /> Vite
              </CardTitle>
              <CardDescription>Next Generation Frontend Tooling</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-col gap-4">
                <span>Instant Server Start</span>
                <span>Lightning Fast HMR</span>
                <span>Rich Features</span>
                <span className="i-lucide:more-horizontal h-4"></span>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[320px] hover:shadow-#B4EAA1">
            <CardHeader>
              <CardTitle className="flex gap-2">
                <span className="i-logos:unocss inline-flex h-4 group-hover:rotate-23 transition-all" />
                unocss
              </CardTitle>
              <CardDescription>Instant On-demand Atomic CSS Engine</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-col gap-4">
                <span>Fully Customizable</span>
                <span>Instant</span>
                <span>Rich Integrations</span>
                <span className="i-lucide:more-horizontal h-4"></span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <p className="py-5 text-center">
        <a className="App-link" href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer">
          Wagmi Docs
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
        {' | '}
        <a className="App-link" href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">
          Unocss Docs
        </a>
      </p>
      <p>
        {['', '', '', ''].map((_, index) => (
          <Item key={index} />
        ))}
      </p>
    </>
  )
}

export default Home

function Item() {
  const { status } = useWagmi()

  return <span></span>
}
