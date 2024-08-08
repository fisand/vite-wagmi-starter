import { useAccount, useSwitchChain } from 'wagmi'

export function NetworkSwitcher() {
  const { chains, switchChain, isPending } = useSwitchChain()
  const { chain } = useAccount()
  const defaultValue = useMemo(() => chain?.id.toString(), [chain?.id])

  const [pendingChainId, setPendingChainId] = useState<number>()
  if (!chain)
    return null

  return (
    <Select
      onValueChange={(val) => {
        setPendingChainId(+val)
        switchChain({
          chainId: Number(val),
        })
      }}
      defaultValue={defaultValue}
      value={defaultValue}
    >
      <SelectTrigger className="max-w-auto lt-sm:hidden">
        <SelectValue>
          <span className="flex-center">
            {isPending && (
              <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-primary" />
            )}
            {' '}
            {chain.name}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {chains.map(x =>
            x.id === chain?.id
              ? null
              : (
                  <SelectItem value={`${x.id}`} key={x.id} className="">
                    <span className="flex-center">
                      {isPending && x.id === pendingChainId && (
                        <span className="i-line-md:loading-twotone-loop mr-1 h-4 w-4 inline-flex text-primary" />
                      )}
                      {' '}
                      {x.name}
                    </span>
                  </SelectItem>
                ),
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
