import { shorten } from '@did-network/dapp-sdk'
import type { ReactNode } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function WalletModal(props: {
  children: ({ isLoading }: { isLoading?: boolean }) => ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  close?: () => void
}) {
  const { children, open, onOpenChange, close } = props
  const { connectAsync, connectors, isPending } = useConnect()
  const { address, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()
  const [pendingConnectorId, setPendingConnectorId] = useState('')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children({ isLoading: isPending })}</DialogTrigger>
      <DialogContent className="md:top-90 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Wallet</DialogTitle>
          <DialogDescription>connect to web3</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          {address ? (
            <>
              <div className="my-3 flex-center">{shorten(address)}</div>
              <Button
                onClick={() => {
                  disconnect()
                  close?.()
                }}
                className="w-full flex-center"
              >
                disconnect
                {' '}
                <span className="i-carbon:cookie" />
              </Button>
            </>
          ) : (
            <div className="flex-col-center">
              {connectors.map(connector => (
                <Button
                  key={connector.id}
                  onClick={async () => {
                    setPendingConnectorId(connector.id)
                    await connectAsync({
                      connector,
                    })
                    close?.()
                  }}
                  className="mb-3 w-full"
                  size="lg"
                >
                  {connector.name}
                  {/* {!connector.ready && ' (unsupported)'} */}
                  {isConnecting && connector.id === pendingConnectorId && ' (connecting)'}
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
