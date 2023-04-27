import { Button } from 'uno-ui/src/components/ui/button'
import { useNetwork, useSwitchNetwork } from 'wagmi'

export function NetworkSwitcher() {
  const { error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const { chains, chain } = useNetwork()

  if (!chain) return null

  return (
    <div className="my-4">
      <div>
        Connected to <span className="font-bold">{chain?.name ?? chain?.id}</span>
        <span className="text-red-400">{chain?.unsupported && ' (unsupported)'}</span>
      </div>

      {switchNetwork && (
        <div className="flex gap-2 flex-wrap mt-3">
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <Button key={x.id} onClick={() => switchNetwork(x.id)}>
                {isLoading && x.id === pendingChainId && (
                  <span className="i-line-md:loading-twotone-loop inline-flex mr-1 w-4 h-4 text-white"></span>
                )}{' '}
                {x.name}
              </Button>
            )
          )}
        </div>
      )}

      <div className="text-red-400">{error && error.message}</div>
    </div>
  )
}
