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
    <Link to='#'>
      <Space>
        <Avatar className={className} src={author.avatar} alt={author.name} size={avatarSize} />
        {!onlyAvatar && <Typography.Text className='!mb-0 font-semibold'>{author.name}</Typography.Text>}
      </Space>
    </Link>
  )

  return onlyAvatar ? <Tooltip title={author.name}>{element}</Tooltip> : element
}

export { Author }
