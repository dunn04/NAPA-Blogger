import { ICouterItem } from '@/types'
import { Card, Flex, Typography } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  data: ICouterItem
}

const CouterItem: FC<Props> = ({ className, data }) => {
  const { count, title } = data
  return (
    <Card className={twMerge(className)}>
      <Flex justify='center' align='center' wrap className='text-center'>
        <Typography.Title level={3} className='block w-full'>
          {count}
        </Typography.Title>
        <Typography.Text className='block w-full'>{title}</Typography.Text>
      </Flex>
    </Card>
  )
}

export { CouterItem }
