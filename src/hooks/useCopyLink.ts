import { message } from 'antd'
import { useCopyToClipboard } from './useCopyToClipboard'

const useCopyLink = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [copyToClipboard, copied] = useCopyToClipboard()

  const handleCopyLink = (path: string) => {
    copyToClipboard(window.location.origin + path)
    messageApi.success('Link copied to clipboard!')
  }

  return { handleCopyLink, contextHolder, copied }
}

export { useCopyLink }
