import { Category } from '@/types'
import { Badge, Flex, Typography } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  categories: Category[]
  title?: string
}

const Categories: FC<Props> = ({ className, categories, title = 'Other Featured Topics' }) => {
  return (
    <div className={twMerge(className)}>
      <Typography.Text className='uppercase w-full'>{title}</Typography.Text>
      <Flex gap={4} wrap className='mt-4'>
        {categories.map((category) => (
          <Link to='' key={category.id}>
            <Badge count={category.name} color='cyan' className='cursor-pointer' />
          </Link>
        ))}
      </Flex>
    </div>
  )
}

export { Categories }
