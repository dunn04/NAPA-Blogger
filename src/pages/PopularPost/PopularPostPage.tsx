import { ListPost } from '@/components'
import { POSTS } from '@/constants'
import { ContentLayout } from '@/Layouts'
import { FC } from 'react'

const PopularPostPage: FC = () => {
  return (
    <ContentLayout.WithCategories
      title='Popular Posts'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut'
    >
      <ListPost posts={POSTS} />
    </ContentLayout.WithCategories>
  )
}

export { PopularPostPage }
