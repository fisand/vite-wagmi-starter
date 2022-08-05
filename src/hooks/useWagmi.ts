import { useAccount, useContractRead, useContractReads } from 'wagmi'

import { useWagmiContract } from './useContract'

export const useWagmi = () => {
  const { address } = useAccount()
  const wagmiContract = useWagmiContract()

  const { data } = useContractReads({
    contracts: [
      {
        ...wagmiContract,
        functionName: 'getHunger',
        // watch: true,
      },
      {
        ...wagmiContract,
        functionName: 'getBoredom',
        // watch: true,
      },
      {
        ...wagmiContract,
        functionName: 'getAlive',
        // watch: true,
      },
      {
        ...wagmiContract,
        functionName: 'love',
        args: [address],
        // watch: true,
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
