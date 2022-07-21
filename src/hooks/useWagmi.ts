import { useAccount, useContractRead } from 'wagmi'

import { useWagmiContract } from './useContract'

export const useWagmi = () => {
  const { address } = useAccount()
  const wagmiContract = useWagmiContract()
  const { data: hunger } = useContractRead({
    ...wagmiContract,
    functionName: 'getHunger',
    // watch: true,
  })

  const { data: getBoredom } = useContractRead({
    ...wagmiContract,
    functionName: 'getBoredom',
    // watch: true,
  })

  const { data: getAlive } = useContractRead({
    ...wagmiContract,
    functionName: 'getAlive',
    // watch: true,
  })

  const { data: loved } = useContractRead({
    ...wagmiContract,
    functionName: 'love',
    args: [address],
    // watch: true,
    enabled: !!address,
  })

  return {
    getBoredom,
    getAlive,
    loved,
    status: hunger?.toString(),
  }
}
