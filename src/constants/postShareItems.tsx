import { PostShareItem } from '@/types'
import { FacebookOutlined, FlagOutlined, LinkOutlined, TwitchOutlined } from '@ant-design/icons'

const POST_SHARE_ITEM: PostShareItem[] = [
  {
    key: 'facebook',
    icon: <FacebookOutlined />,
    label: 'Share on Facebook'
  },
  {
    key: 'twitter',
    icon: <TwitchOutlined />,
    label: 'Share on Twitter'
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: 'Copy link'
  },
  {
    key: 'report',
    icon: <FlagOutlined />,
    label: 'Report'
  }
]

export { POST_SHARE_ITEM }
