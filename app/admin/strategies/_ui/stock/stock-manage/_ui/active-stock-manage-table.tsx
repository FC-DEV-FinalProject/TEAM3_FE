'use client'

import { useState } from 'react'

import withSuspense from '@/shared/utils/with-suspense'

import ManageTable from '../../../shared/manage-table'
import useStocksData from '../_hooks/query/use-stocks-data'
import StockActiveStateToggleButton from './stock-active-state-toggle-button'

const TABLE_BODY_SIZE = 10

const ActiveStockManageTable = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const { isLoading, data } = useStocksData('active', currentPage, TABLE_BODY_SIZE)
  const tableData =
    data?.content.map(({ stockTypeName, stockTypeIconUrl, stockTypeId }) => [
      stockTypeName,
      <img src={stockTypeIconUrl} alt={stockTypeName} key={stockTypeName} />,
      <StockActiveStateToggleButton stockTypeId={stockTypeId} active key={stockTypeId} />,
    ]) ?? []

  if (isLoading) return <ManageTable.Skeleton domain="종목" />

  return (
    <ManageTable
      data={tableData}
      size={TABLE_BODY_SIZE}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      maxPage={data?.totalPages}
      active
      domain="종목"
    />
  )
}

export default ActiveStockManageTable