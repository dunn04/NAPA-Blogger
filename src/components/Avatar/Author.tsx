import { Author as IAuthor } from '@/types'
import { Avatar, Space, Tooltip, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  author: IAuthor
  onlyAvatar?: boolean
}

const Author: FC<Props> = ({ className, author, onlyAvatar = false }) => {
  const element = (
    <Link to='#'>
      <Space>
        <Avatar className={className} src={author.avatar} alt={author.name} />
        {!onlyAvatar && (
          <Typography.Title level={5} className='!mb-0'>
            {author.name}
          </Typography.Title>
        )}
      </Space>
    </Link>
  )

  return onlyAvatar ? <Tooltip title={author.name}>{element}</Tooltip> : element
}

export { Author }
