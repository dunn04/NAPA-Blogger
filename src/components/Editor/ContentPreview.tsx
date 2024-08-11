import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import { Image, theme, Typography } from 'antd'
import { FC } from 'react'

type Props = MarkdownPreviewProps

const ContentPreview: FC<Props> = ({ components, ...props }) => {
  const { token } = theme.useToken()
  return (
    <MarkdownPreview
      style={{
        backgroundColor: token.colorBgContainer
      }}
      components={{
        p: ({ ...props }) => <Typography.Paragraph {...props} />,
        h1: ({ ...props }) => <Typography.Title level={1} {...props} />,
        h2: ({ ...props }) => <Typography.Title level={2} {...props} />,
        h3: ({ ...props }) => <Typography.Title level={3} {...props} />,
        h4: ({ ...props }) => <Typography.Title level={4} {...props} />,
        h5: ({ ...props }) => <Typography.Title level={5} {...props} />,
        img: ({ src, alt }) => <Image src={src} alt={alt} />,
        ...components
      }}
      {...props}
    />
  )
}

export { ContentPreview }
