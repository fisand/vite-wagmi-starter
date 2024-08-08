import { useAccount } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'

import WAGMI_ABI from './abi/Wagmi'

export function useWagmiContract() {
  const address = useWagmiContractAddress()
  return useMemo(
    () => ({
      address: address! as `0x${string}`,
      abi: WAGMI_ABI,
    }),
    [address],
  )
}

export function useWagmiContractAddress() {
  const { chain = mainnet } = useAccount()

  return useMemo(
    () =>
      ({
        [mainnet.id]: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        [goerli.id]: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
      })[chain.id],
    [chain],
  )
}
