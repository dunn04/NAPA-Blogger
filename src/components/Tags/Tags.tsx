import { Tag } from '@/types'
import { Badge, Flex, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  tags: Tag[]
  title?: string
  titleClassName?: string
}

const Tags: FC<Props> = ({ className, tags, title = 'Tags', titleClassName }) => {
  return (
    <div className={twMerge(className)}>
      <Typography.Text className={twMerge('uppercase w-full', titleClassName)}>{title}</Typography.Text>
      <Flex gap={4} wrap className='mt-4'>
        {tags.map((tag) => (
          <Link to='' key={tag.id}>
            <Badge count={tag.name} color={tag.color} className='cursor-pointer' />
          </Link>
        ))}
      </Flex>
    </div>
  )
}

export { Tags }
