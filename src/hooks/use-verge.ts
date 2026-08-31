import { useCallback } from 'react'

import { getVergeConfig, patchVergeConfig } from '@/services/cmds'
import { getPreloadConfig, setPreloadConfig } from '@/services/preload'
import { getCacheData, setCacheData, useQuery } from '@/services/query-client'

export const useVerge = () => {
  const initialVergeConfig = getPreloadConfig()

  const { data: verge, refetch } = useQuery({
    queryKey: ['getVergeConfig'],
    queryFn: async () => {
      const config = await getVergeConfig()
      setPreloadConfig(config)
      return config
    },
    initialData: initialVergeConfig ?? undefined,
    revalidateOnMount: initialVergeConfig ? false : undefined,
    staleTime: 5000,
  })

  const mutateVerge = (
    updaterOrData?:
      | IMetaConfig
      | ((prev: IMetaConfig | undefined) => IMetaConfig | undefined)
      | undefined,
    _revalidate?: boolean,
  ) => {
    if (updaterOrData === undefined) {
      void refetch()
      return
    }
    if (typeof updaterOrData === 'function') {
      const prev = getCacheData<IMetaConfig>(['getVergeConfig'])
      const next = updaterOrData(prev)
      setCacheData(['getVergeConfig'], next)
    } else {
      setCacheData(['getVergeConfig'], updaterOrData)
    }
  }

  const patchVerge = useCallback(
    async (value: Partial<IMetaConfig>) => {
      await patchVergeConfig(value)
      await refetch()
    },
    [refetch],
  )

  return {
    verge,
    mutateVerge,
    patchVerge,
  }
}
