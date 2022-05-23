import { useNetwork } from 'wagmi'
import { Button } from 'antd'

export function NetworkSwitcher() {
  const { activeChain, chains, error, isLoading, pendingChainId, switchNetwork } = useNetwork()

  if (!activeChain) return null

  return (
    <div className="my-4">
      <div>
        Connected to <span className="font-bold">{activeChain?.name ?? activeChain?.id}</span>
        <span className="text-red-400">{activeChain?.unsupported && ' (unsupported)'}</span>
      </div>

      {switchNetwork && (
        <div className="flex gap-2 mt-3">
          {chains.map((x) =>
            x.id === activeChain?.id ? null : (
              <Button
                loading={isLoading && x.id === pendingChainId}
                ghost
                type="primary"
                key={x.id}
                onClick={() => switchNetwork(x.id)}
              >
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
