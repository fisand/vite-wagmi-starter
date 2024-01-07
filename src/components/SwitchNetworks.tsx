import { useAccount, useSwitchChain } from 'wagmi'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function NetworkSwitcher() {
  const { chains, switchChain, isPending } = useSwitchChain()
  const { chain } = useAccount()
  const defaultValue = useMemo(() => chain?.id.toString(), [chain?.id])

  const [pendingChainId, setPendingChainId] = useState<number>()
  if (!chain) return null

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
              <span className="i-line-md:loading-twotone-loop inline-flex mr-1 w-4 h-4 text-primary"></span>
            )}{' '}
            {chain.name}
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {chains.map((x) =>
            x.id === chain?.id ? null : (
              <SelectItem value={`${x.id}`} key={x.id} className="">
                <span className="flex-center">
                  {isPending && x.id === pendingChainId && (
                    <span className="i-line-md:loading-twotone-loop inline-flex mr-1 w-4 h-4 text-primary"></span>
                  )}{' '}
                  {x.name}
                </span>
              </SelectItem>
            )
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
