import { ROUTE_ACTIONS } from '@/constants'
import { Author as IAuthor } from '@/types'
import { limitTextToWords } from '@/utils'
import { Avatar, AvatarProps, Space, Tooltip, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  author: IAuthor
  onlyAvatar?: boolean
  avatarSize?: AvatarProps['size']
  subTitle?: string
}

const Author: FC<Props> = ({ className, author, onlyAvatar = false, avatarSize = 'default', subTitle }) => {
  const displaySubTitle = subTitle || (author && author.bio)
  const element = (
    <Link to={ROUTE_ACTIONS.USER_PROFILE_WITH_ID(`${author.id}`)}>
      <Space>
        <Avatar className={className} src={author.avatar} alt={author.name} size={avatarSize} />
        {!onlyAvatar && (
          <Space direction='vertical'>
            <Typography.Text>{author.name}</Typography.Text>
            {displaySubTitle && (
              <Typography.Text type='secondary'>{limitTextToWords(displaySubTitle, 10)}</Typography.Text>
            )}
          </Space>
        )}
      </Space>
    </Link>
  )

  return onlyAvatar ? <Tooltip title={author.name}>{element}</Tooltip> : element
}

export { Author }
