import { ListPost } from '@/components'
import { POSTS } from '@/constants'
import { Space, Typography } from 'antd'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const FilterBlogsPage: FC = () => {
  // Fetch the filter from the URL
  // const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  return (
    <Space direction='vertical' className='w-full container mx-auto flex'>
      <Typography.Title className='text-center block'>{params.get('filter')}</Typography.Title>
      <ListPost
        grid={{
          xl: 4
        }}
        posts={POSTS}
        postNonImage
      />
    </Space>
  )
}

export { FilterBlogsPage }
