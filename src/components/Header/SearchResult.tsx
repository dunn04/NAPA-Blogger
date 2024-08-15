import { PostSearchItem } from '@/types'
import { List, Space, Typography } from 'antd'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Author } from '../Avatar'
import { limitTextToWords } from '@/utils'
import { Link } from 'react-router-dom'
import { ROUTE_ACTIONS } from '@/constants'

type Props = {
  className?: string
  result: PostSearchItem[]
  onMenuClick?: () => void
}

const SearchResult = forwardRef<HTMLDivElement, Props>(({ className, result, onMenuClick }, ref) => {
  return (
    <Space direction='vertical' className={twMerge('w-full max-h-96 overflow-y-scroll', className)} ref={ref}>
      <Typography.Text className='font-semibold'>Search Result</Typography.Text>
      <List
        dataSource={result}
        renderItem={(item) => (
          <List.Item className='hover:bg-slate-100 rounded-md'>
            <Link to={ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${item.id}`)} onClick={onMenuClick} className='w-full'>
              <List.Item.Meta
                className='w-full'
                title={item.title}
                description={limitTextToWords(item.shortContent, 10)}
                avatar={<Author author={item.author} onlyAvatar avatarSize='large' />}
              />
            </Link>
          </List.Item>
        )}
        rowKey='id'
      />
    </Space>
  )
})
export { SearchResult }
