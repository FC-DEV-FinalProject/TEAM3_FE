'use client'

import AdminContentsHeader from '@/app/admin/_ui/admin-header'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import Pagination from '@/shared/ui/pagination'
import VerticalTable from '@/shared/ui/table/vertical'

import useAdminNotices from '../../_hook/query/get-admin-notices'
import NoticeDeleteButton from '../notice-delete-button'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const AdminNoticeTable = () => {
  const { data, isLoading } = useAdminNotices()

  if (isLoading) {
    return <VerticalTable.Skeleton tableHead={['No.', '제목', '내용', '작성일', '']} />
  }

  const tableBody =
    data?.content.map((data) => [
      data.noticeId,
      data.title,
      data.content.slice(0, 15),
      data.createdAt.slice(0, 10),
      <Button.ButtonGroup key={data.content}>
        <Button
          onClick={() => {}}
          size="small"
          className={cx('button')}
          style={{ padding: '16px 7px' }}
        >
          수정
        </Button>
        <NoticeDeleteButton noticeId={data.noticeId} />
      </Button.ButtonGroup>,
    ]) || []

  return (
    <>
      <AdminContentsHeader
        Left={
          <span>
            총 <span className={cx('colored')}>{data?.totalElements}</span>개
          </span>
        }
        className={cx('header')}
      />
      <VerticalTable
        tableHead={['No.', '제목', '내용', '작성일', '']}
        tableBody={tableBody}
        countPerPage={10}
        currentPage={1}
      />
      <Pagination currentPage={1} maxPage={1} onPageChange={() => {}} />
    </>
  )
}

export default AdminNoticeTable
