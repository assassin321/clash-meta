import { useCallback } from 'react'

import { getMetaConfig, patchMetaConfig } from '@/services/cmds'
import { mutate } from '@/services/mutate'
import { getPreloadConfig, setPreloadConfig } from '@/services/preload'
import { setCacheData, useQuery } from '@/services/query-client'

export const useVerge = () => {
  const initialMetaConfig = getPreloadConfig()

  const { data: verge, refetch } = useQuery({
    queryKey: ['getMetaConfig'],
    queryFn: async () => {
      const config = await getMetaConfig()
      setPreloadConfig(config)
      return config
    },
    initialData: initialMetaConfig ?? undefined,
    revalidateOnMount: initialMetaConfig ? false : undefined,
    staleTime: 5000,
  })

  const mutateMeta = (
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
    void setCacheData<IMetaConfig>(
      ['getMetaConfig'],
      typeof updaterOrData === 'function'
        ? (current) => updaterOrData(current ?? verge)
        : updaterOrData,
    )
  }

  // Callers own the error toast (GuardState onCatch / page onError), so the
  // funnel must not add a second one.
  const patchMeta = useCallback(async (value: Partial<IMetaConfig>) => {
    await mutate(() => patchMetaConfig(value), {
      id: 'patch-verge-config',
      revalidate: [['getMetaConfig']],
      errorNotice: false,
    })
  }, [])

  return {
    verge,
    mutateMeta,
    patchMeta,
  }
}
