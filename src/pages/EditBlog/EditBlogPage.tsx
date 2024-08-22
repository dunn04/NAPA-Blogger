import { PostForm } from '@/components'
import { ContentLayout } from '@/Layouts'
import { Card } from 'antd'
import { FC } from 'react'

const EditBlogPage: FC = () => {
  // Call useParams to get the id from the URL
  // const { id } = useParams<{ id: string }>()

  return (
    <Card className='max-w-2xl mx-auto'>
      <ContentLayout title='Edit Post' description='Edit your post. Please fill all input below.'>
        <PostForm
          initialValues={{
            title: 'My first post',
            content: 'This is my first post',
            categoryId: 1,
            publishedAt: Date.now(),
            tags: [-1, -2]
          }}
        />
      </ContentLayout>
    </Card>
  )
}

export { EditBlogPage }
