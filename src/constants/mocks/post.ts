import { PostSimplify, PostSummary } from '@/types'

const POST: PostSimplify = {
  author: {
    avatar: 'https://i.pravatar.cc/300',
    id: 1,
    name: 'John Doe'
  },
  background: 'https://i.pinimg.com/736x/e2/58/b5/e258b5ae2b1cf8195d33743570dbe498.jpg',
  bookmarked: false,
  category: {
    id: 1,
    name: 'Technology'
  },
  comments: 10,
  shortContent:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies. Nullam nec purus ut libero ultricies ultricies.',
  id: 1,
  likes: 100,
  publishedAt: Date.now(),
  title: 'Lorem ipsum dolor sit amet'
}

const POSTS = Array.from({ length: 10 }, (_, i) => ({
  ...POST,
  id: i + 1
}))

const POST_SUMMARYS: PostSummary[] = POSTS.map((post) => {
  return {
    id: post.id,
    author: post.author,
    bookmarked: post.bookmarked,
    createdAt: post.publishedAt,
    status: 'draft',
    title: post.title + 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    updatedAt: post.publishedAt
  }
})

export { POSTS, POST_SUMMARYS }
