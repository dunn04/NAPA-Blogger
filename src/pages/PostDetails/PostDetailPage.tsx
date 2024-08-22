import {
  Author,
  ToggleBookmark,
  PostShareDropdown,
  ToggleButton,
  PostCommentDrawer,
  ContentPreview,
  ListPost,
  Categories,
  Tags,
  ReportModal
} from '@/components'
import { COMMENTS, POSTS } from '@/constants'
import { useToggle } from '@/hooks'
import { PostInstance } from '@/types'
import { makeBeautyDate } from '@/utils'
import { CommentOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Badge, Button, Divider, Flex, Space, Typography } from 'antd'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

// Fake data

const getPostWithId = (id: string): PostInstance => ({
  id: Number(id),
  title: 'Lorem ipsum dolor sit amet',
  content: `# The Rise of Web Development: Trends in 2024

![Web Development](https://www.twintel.net/wp-content/uploads/2023/10/10-25-23.jpg)

Web development has been evolving rapidly, and 2024 is no exception. In this blog post, we'll explore the top trends shaping the industry and what they mean for developers and businesses alike.

## 1. The Growth of Web3 Technologies

![Web3](https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg)

Web3 is no longer just a buzzword. The decentralized web is becoming more mainstream, with blockchain technology at the forefront. Developers are focusing on building decentralized applications (dApps) that offer greater transparency, security, and user control.

### Key Benefits of Web3:
- **Decentralization:** Eliminates the need for intermediaries.
- **Security:** Enhanced encryption and security protocols.
- **User Empowerment:** Users have full control over their data.

## 2. Serverless Architecture Adoption

![Serverless](https://hasonss.com/blogs/wp-content/uploads/2023/10/types-of-technology-2.webp)

Serverless computing is gaining momentum as it offers scalability and cost-efficiency. Developers can now focus on writing code without worrying about managing servers, thanks to platforms like AWS Lambda and Google Cloud Functions.

### Why Go Serverless?
- **Cost-Effective:** Pay only for what you use.
- **Scalability:** Automatically scales with traffic.
- **Faster Time to Market:** Deploy applications quickly.

## 3. The Rise of Jamstack

![Jamstack](https://www.globalfocusmagazine.com/wp-content/uploads/2020/02/Engaging_with_technology-2048x1365.jpg)

Jamstack (JavaScript, APIs, and Markup) is revolutionizing web development by decoupling the front-end and back-end. This architecture improves performance, enhances security, and provides a better developer experience.

### Advantages of Jamstack:
- **Performance:** Faster load times and better SEO.
- **Security:** Reduced attack surfaces.
- **Flexibility:** Choose your preferred tools and frameworks.

## 4. AI-Powered Development Tools

![AI Tools](https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg)

Artificial Intelligence is making its way into web development, providing tools that can automate code generation, bug fixing, and even design processes. These tools are enabling developers to work more efficiently and focus on complex tasks.

### Popular AI Tools in 2024:
- **GitHub Copilot:** AI-assisted code completion.
- **Tabnine:** AI-powered code suggestions.
- **DeepCode:** AI-driven code review and optimization.

## 5. Progressive Web Apps (PWAs) on the Rise

![PWAs](https://www.training.com.au/wp-content/uploads/career-in-technology-feature.png)

Progressive Web Apps (PWAs) continue to bridge the gap between web and mobile applications. PWAs offer offline capabilities, push notifications, and native app-like experiences without requiring users to download an app from the store.

### Why PWAs Matter:
- **Offline Access:** Works even without an internet connection.
- **Push Notifications:** Engages users with real-time updates.
- **Cross-Platform:** Runs on any device with a browser.

## Conclusion

The web development landscape in 2024 is full of exciting opportunities. From Web3 technologies to serverless architectures and AI-powered tools, developers have more resources than ever to create innovative and efficient applications. Embracing these trends will be key to staying ahead in this fast-paced industry.

---

*Posted on August 13, 2024, by [John Doe](#). Follow me on [Twitter](#) for more insights into the world of web development.*
`,
  shortContent:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo incidunt atque ex magni consequuntur non quisquam sit, fugiat tenetur error voluptates sed ad perferendis natus reprehenderit veniam est minus neque.',
  status: 'published',
  author: {
    avatar: 'https://i.pravatar.cc/150?img=1',
    id: 1,
    name: 'John Doe'
  },
  bookmarked: false,
  category: {
    id: 1,
    name: 'Technology'
  },
  comments: 10,
  createdAt: Date.now(),
  likes: 100,
  publishedAt: Date.now(),
  tags: [
    {
      color: '#f50',
      id: 1,
      name: 'ReactJS'
    },
    {
      color: '#2db7f5',
      id: 2,
      name: 'NodeJS'
    },
    {
      color: '#87d068',
      id: 3,
      name: 'TypeScript'
    }
  ],
  updatedAt: Date.now()
})
const PostDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = getPostWithId(id || '1')
  const [openComment, toggleComment] = useToggle(false)

  return (
    <div className='max-w-4xl mx-auto'>
      <Typography.Title level={2}>{post.title}</Typography.Title>
      <Categories categories={[post.category]} className='mb-6' title='' />
      <Flex justify='center' className='mt-2'>
        <Author author={post.author} avatarSize='large' />
        <Space className='ml-auto'>
          <ToggleBookmark />
          <ReportModal />
          <PostShareDropdown />
        </Space>
      </Flex>
      <Badge status='success' text={`Published at ${makeBeautyDate(post.publishedAt)}`} className='my-4' />
      <ContentPreview source={post.content} />
      <Space className='mt-4' wrap>
        <ToggleButton
          type='text'
          checkedIcon={<HeartFilled className='text-red-500' />}
          unCheckedIcon={<HeartOutlined />}
        >
          {post.likes} Likes
        </ToggleButton>
        <Button type='text' icon={<CommentOutlined />} onClick={toggleComment}>
          {post.comments} Comments
        </Button>
      </Space>
      <Tags tags={post.tags} titleClassName='font-bold' className='w-full' />
      <Divider />
      <Typography.Title level={4} className='mt-4'>
        Other Posts
      </Typography.Title>
      <ListPost posts={POSTS.slice(0, 4)} postNonImage />
      <PostCommentDrawer comments={COMMENTS} open={openComment} onClose={toggleComment} />
    </div>
  )
}

export { PostDetailPage }
