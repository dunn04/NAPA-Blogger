import { Timestamped } from '../common'
import { Author } from '../users'
import { Category } from './categories'
import { Tag } from './tags'

export type PostStatus = 'published' | 'pending' | 'draft' | 'rejected'

export interface Post extends Timestamped {
  id: number
  title: string
  content: string
  shortContent: string
  statusId: number
  authorId: number
  publishedAt: number
}

export type PostInstance = Omit<Post, 'statusId' | 'authorId'> & {
  status: PostStatus
  author: Author
  tags: Tag[]
  likes: number
  comments: number
  bookmarked: boolean
  category: Category
}

export type PostCreateParams = Pick<Post, 'title' | 'content'> & {
  tags: number[]
  categoryId: number
}

export interface PostImage {
  id: number
  url: string
  fileName: string
  fileType: string
  size: number
  postId: number
  uploadedAt: number
}

export type PostSimplify = Pick<
  PostInstance,
  'id' | 'title' | 'shortContent' | 'publishedAt' | 'likes' | 'comments' | 'bookmarked' | 'author'
> & {
  background: string
  category: Category
}

export type PostSummary = Pick<
  PostInstance,
  'id' | 'title' | 'author' | 'updatedAt' | 'createdAt' | 'bookmarked' | 'status'
>

export type PostSearchItem = Pick<PostInstance, 'id' | 'title' | 'shortContent' | 'publishedAt' | 'author'> & {
  background: string
}
