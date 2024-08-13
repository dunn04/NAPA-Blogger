import { RightOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Space, Typography } from 'antd'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { SettingItemModal } from './SettingItemModal'
import { limitTextToWords } from '@/utils'
import { SettingInput } from './SettingInput'
import { SettingAvatar } from './SettingAvatar'

export type SettingItemProps = {
  className?: string
  title?: ReactNode
  subTitle?: ReactNode
  value?: ReactNode
  onClick?: () => void
} & PropsWithChildren

const Instance: FC<SettingItemProps> = ({ className, title, subTitle, value = '', onClick, children }) => {
  const displayValue = typeof value === 'string' ? limitTextToWords(value, 5) : value
  return (
    <Card hoverable className={twMerge(onClick && 'cursor-pointer', className)} onClick={onClick}>
      <Flex justify='space-between' align='center'>
        <div className='flex flex-col'>
          <Typography.Text className=''>{title}</Typography.Text>
          <Typography.Text type='secondary'>{subTitle}</Typography.Text>
        </div>
        <Space>
          <Typography.Text className=''>{displayValue}</Typography.Text>
          {onClick && <Button type='text' icon={<RightOutlined />}></Button>}
        </Space>
      </Flex>
      {children}
    </Card>
  )
}
const SettingItem = Object.assign(Instance, {
  Modal: SettingItemModal,
  Input: SettingInput,
  Avatar: SettingAvatar
})
export { SettingItem }
