import { useNetwork, useSwitchNetwork } from 'wagmi'

import { Button } from '@/components/ui/button'
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
  const { error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
  const { chains, chain } = useNetwork()

  const defaultValue = useMemo(() => chain?.id.toString(), [chain?.id])

  if (!chain) return null

  return (
    <Select
      onValueChange={(val) => {
        switchNetwork?.(Number(val))
      }}
      defaultValue={defaultValue}
      value={defaultValue}
    >
      <SelectTrigger className="max-w-auto h-8 lt-sm:hidden">
        <SelectValue>
          <span className="flex-center">
            {isLoading && (
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
              <SelectItem value={`${x.id}`} key={x.id} className="first:[&>span]:hidden pl-2">
                <span className="flex-center">
                  {isLoading && x.id === pendingChainId && (
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
