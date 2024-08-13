import { CommentInstance } from '@/types'

const COMMENT: CommentInstance = {
  id: 1,
  author: {
    avatar: 'https://i.pravatar.cc/150?img=2',
    id: 2,
    name: 'Jane Doe'
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo incidunt atque ex magni consequuntur non quisquam sit, fugiat tenetur error voluptates sed ad perferendis natus reprehenderit veniam est minus neque.',
  createdAt: Date.now(),
  postId: 1,
  status: 'published',
  updatedAt: Date.now(),
  replies: [] as CommentInstance[]
}
const COMMENTS: CommentInstance[] = Array.from({ length: 10 }, (_, i) => {
  const comment = { ...COMMENT }
  const repliesLength = Math.floor(Math.random() * 15)

  if (repliesLength > 0) {
    comment.replies = Array.from({ length: repliesLength }, (_, i) => {
      const reply: CommentInstance = {
        ...COMMENT,
        id: i + 2
      }
      return reply
    })
  }
  comment.id = i + 1
  return comment
})

export { COMMENTS }
