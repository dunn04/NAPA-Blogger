import { ROUTE_ACTIONS } from '@/constants'
import { Author as IAuthor } from '@/types'
import { Avatar, AvatarProps, Space, Tooltip, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  author: IAuthor
  onlyAvatar?: boolean
  avatarSize?: AvatarProps['size']
}

const Author: FC<Props> = ({ className, author, onlyAvatar = false, avatarSize = 'default' }) => {
  const element = (
    <Link to={ROUTE_ACTIONS.USER_PROFILE_WITH_ID(`${author.id}`)}>
      <Space>
        <Avatar className={className} src={author.avatar} alt={author.name} size={avatarSize} />
        {!onlyAvatar && (
          <Typography.Text className='!mb-0 font-semibold !text-ant-text-color transition-colors hover:!text-ant-primary '>
            {author.name}
          </Typography.Text>
        )}
      </Space>
    </Link>
  )

  return onlyAvatar ? <Tooltip title={author.name}>{element}</Tooltip> : element
}

export { Author }
