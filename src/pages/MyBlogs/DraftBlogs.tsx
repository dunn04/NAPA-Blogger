import { FC, useEffect } from 'react'
import { useWrapper } from './useWrapper'

const DraftBlogs: FC = () => {
  const { setTitle, setDescription } = useWrapper()
  useEffect(() => {
    setTitle('Draft blogs')
    setDescription('This is where you can see all your draft blogs')
  }, [setTitle, setDescription])
  return <h1>This is draft blog</h1>
}

export { DraftBlogs }
