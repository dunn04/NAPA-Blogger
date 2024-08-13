import { ListPostCompact, PostCompactActions } from '@/components'
import { POST_SUMMARYS } from '@/constants'
import { FC, useCallback, useEffect } from 'react'
import { useWrapper } from './useWrapper'

const SavedBlogs: FC = () => {
  const handleDelete = useCallback(() => {}, [])
  const action = useWrapper()
  useEffect(() => {
    action.setTitle('Saved blogs')
    action.setDescription('This is where you can see all your saved blogs')
  }, [action])

  return (
    <ListPostCompact
      posts={POST_SUMMARYS}
      postProps={{
        extra: (post) => <PostCompactActions post={post} onDelete={handleDelete} />,
        withAuthor: true
      }}
    />
  )
}

export { SavedBlogs }
