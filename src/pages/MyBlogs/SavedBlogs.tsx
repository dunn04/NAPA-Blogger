import { ListPostCompact, PostCompactActions } from '@/components'
import { POST_SUMMARYS, ROUTE_ACTIONS } from '@/constants'
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
        withAuthor: true,
        to: (post) => ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${post.id}`)
      }}
    />
  )
}

export { SavedBlogs }
