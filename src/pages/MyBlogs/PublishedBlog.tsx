import { FC, useCallback, useEffect } from 'react'
import { useWrapper } from './useWrapper'
import { ListPostCompact, PostCompactActions } from '@/components'
import { POST_SUMMARYS } from '@/constants'

const PublishedBlog: FC = () => {
  const action = useWrapper()

  const handleDelete = useCallback(() => {}, [])

  useEffect(() => {
    action.setTitle('Published blogs')
    action.setDescription('This is where you can see all your published blogs')
  }, [action])

  return (
    <ListPostCompact
      posts={[]}
      postProps={{
        extra: (post) => <PostCompactActions post={post} onDelete={handleDelete} />
      }}
    />
  )
}

export { PublishedBlog }
