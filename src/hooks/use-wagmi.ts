import { useAccount, useContractReads } from 'wagmi'

import { useWagmiContract } from './use-contract'

export function useWagmi() {
  const { address } = useAccount()
  const wagmiContract = useWagmiContract()

  const { data } = useContractReads({
    contracts: [
      {
        ...wagmiContract,
        functionName: 'getAlive',
      },
      {
        ...wagmiContract,
        functionName: 'getBoredom',
      },
      {
        ...wagmiContract,
        functionName: 'getAlive',
      },
      {
        ...wagmiContract,
        functionName: 'love',
        args: [address!],
      },
    ],
  })

  return {
    getBoredom: data?.[1]?.toString() ?? undefined,
    getAlive: data?.[2]?.toString() ?? undefined,
    loved: data?.[3]?.toString() ?? undefined,
    status: data?.[0]?.toString() ?? undefined,
  }
}
