import { shorten } from '@did-network/dapp-sdk'
import { ReactNode } from 'react'
import { Button } from 'uno-ui/src/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'uno-ui/src/components/ui/dialog'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function WalletModal(props: {
  children: ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
  close?: () => void
}) {
  const { connect, connectors, pendingConnector } = useConnect()
  const { address, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:top-30">
        <DialogHeader>
          <DialogTitle>Wallet</DialogTitle>
          <DialogDescription>connect to web3</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          {address ? (
            <>
              <div className="flex-center my-3">{shorten(address)}</div>
              <Button
                onClick={(e) => {
                  disconnect()
                  props.close?.()
                }}
                className="flex-center w-full"
              >
                disconnect <span className="i-carbon:cookie"></span>
              </Button>
            </>
          ) : (
            <div className="flex-col-center">
              {connectors.map((connector) => (
                <Button
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={(e) => {
                    connect({
                      connector,
                    })
                    props.close?.()
                  }}
                  className="w-full mb-3 rounded-lg h-12"
                >
                  {connector.name}
                  {!connector.ready && ' (unsupported)'}
                  {isConnecting && connector.id === pendingConnector?.id && ' (connecting)'}
                </Button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
