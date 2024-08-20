import { Author } from '@/components'
import { AuthorWithBio } from '@/types'
import { List } from 'antd'
import { FC } from 'react'

type Props = {
  className?: string
  users: AuthorWithBio[]
}

const UserList: FC<Props> = ({ className, users }) => {
  return (
    <List
      className={className}
      dataSource={users}
      renderItem={(user) => (
        <List.Item>
          <Author author={user} />
        </List.Item>
      )}
      rowKey='id'
    />
  )
}

export { UserList }
