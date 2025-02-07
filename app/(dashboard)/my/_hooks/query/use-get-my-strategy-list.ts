import { getMyStrategyList } from '@/app/(dashboard)/my/_api/get-my-strategy-list'
import { useInfiniteQuery } from '@tanstack/react-query'

import { StrategiesModel } from '@/shared/types/strategy-data'

interface StrategiesPageModel {
  strategies: StrategiesModel[]
  hasMore: boolean
}

export const useGetMyStrategyList = () => {
  return useInfiniteQuery<StrategiesPageModel, Error>({
    queryKey: ['myStrategies'],
    queryFn: async ({ pageParam = 1 }) => {
      const page = typeof pageParam === 'number' ? pageParam : 1
      return getMyStrategyList({ page, size: 4 })
    },
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.hasMore) return undefined
      return pages.length + 1
    },
    initialPageParam: 1,
  })
}
