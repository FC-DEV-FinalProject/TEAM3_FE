'use client'

import { Button } from '@/shared/ui/button'

import useDeleteUser from '../_hooks/query/use-delete-user'

interface Props {
  userId: number
}

const UserDeleteButton = ({ userId }: Props) => {
  // TODO : api 완성되면 연결하기
  // const { mutate, isPending } = useDeleteUser(userId)

  return (
    <Button
      variant="filled"
      // onClick={() => mutate()}
      // disabled={isPending}
      size="small"
      style={{ padding: '7px 16px' }}
    >
      강제삭제
    </Button>
  )
}

export default UserDeleteButton