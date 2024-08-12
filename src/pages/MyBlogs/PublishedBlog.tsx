import { FC, useEffect } from 'react'
import { useWrapper } from './useWrapper'

const PublishedBlog: FC = () => {
  const action = useWrapper()
  useEffect(() => {
    action.setTitle('Published blogs')
    action.setDescription('This is where you can see all your published blogs')
  }, [action])
  return <h1>This is published blog</h1>
}

export { PublishedBlog }
