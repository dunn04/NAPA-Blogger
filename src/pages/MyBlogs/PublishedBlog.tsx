import { FC, useCallback, useEffect } from 'react'
import { useWrapper } from './useWrapper'
import { ListPostCompact, PostCompactActions } from '@/components'
import { ROUTE_ACTIONS } from '@/constants'

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
        extra: (post) => <PostCompactActions post={post} onDelete={handleDelete} />,

        to: (post) => ROUTE_ACTIONS.BLOG_DETAIL_WITH_ID(`${post.id}`)
      }}
    />
  )
}

export { PublishedBlog }
