'use client'

import { ReactNode } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'

import { getQueryClient } from './query-client'

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
