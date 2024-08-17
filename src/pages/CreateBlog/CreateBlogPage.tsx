import { PostForm } from '@/components'
import { ContentLayout } from '@/Layouts'
import { Card } from 'antd'
import { FC } from 'react'

const CreateBlogPage: FC = () => {
  return (
    <Card className='max-w-2xl mx-auto'>
      <ContentLayout title='Create post' description='Create your post. Please fill all input below.'>
        <PostForm />
      </ContentLayout>
    </Card>
  )
}
export { CreateBlogPage }
