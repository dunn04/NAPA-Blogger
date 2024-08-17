import { Button, Form, Input, Select } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Editor } from '../Editor'

type Props = {
  className?: string
}

const PostForm: FC<Props> = ({ className }) => {
  const categoryOptions = [
    {
      label: 'Technology',
      value: 1
    },
    {
      label: 'Lifestyle',
      value: 2
    },
    {
      label: 'Health',
      value: 3
    },
    {
      label: 'Food',
      value: 4
    },
    {
      label: 'Travel',
      value: 5
    },
    {
      label: 'Other',
      value: 6
    }
  ]

  const tagOptions = [
    {
      label: 'React',
      value: 1
    },
    {
      label: 'Vue',
      value: 2
    },
    {
      label: 'Angular',
      value: 3
    },
    {
      label: 'Svelte',
      value: 4
    },
    {
      label: 'Next.js',
      value: 5
    },
    {
      label: 'Nuxt.js',
      value: 6
    },
    {
      label: 'Gatsby',
      value: 7
    },
    {
      label: 'Gridsome',
      value: 8
    },
    {
      label: 'React Native',
      value: 9
    },
    {
      label: 'Flutter',
      value: 10
    },
    {
      label: 'Ionic',
      value: 11
    },
    {
      label: 'Cordova',
      value: 12
    },
    {
      label: 'Capacitor',
      value: 13
    },
    {
      label: 'Electron',
      value: 14
    },
    {
      label: 'NW.js',
      value: 15
    },
    {
      label: 'Node.js',
      value: 16
    },
    {
      label: 'Express',
      value: 17
    },
    {
      label: 'Koa',
      value: 18
    },
    {
      label: 'Sails',
      value: 19
    },
    {
      label: 'Meteor',
      value: 20
    },
    {
      label: 'NestJS',
      value: 21
    },
    {
      label: 'AdonisJS',
      value: 22
    },
    {
      label: 'Feathers',
      value: 23
    },
    {
      label: 'LoopBack',
      value: 24
    },
    {
      label: 'Strapi',
      value: 25
    },
    {
      label: 'KeystoneJS',
      value: 26
    },
    {
      label: 'Ghost',
      value: 27
    },
    {
      label: 'WordPress',
      value: 28
    },
    {
      label: 'Joomla',
      value: 29
    }
  ]

  return (
    <Form layout='vertical' className={twMerge('', className)}>
      <Form.Item label='Title'>
        <Input placeholder='Enter your title of blog' />
      </Form.Item>
      <Form.Item label='Category'>
        <Select defaultValue={1} options={categoryOptions} />
      </Form.Item>
      <Form.Item label='Tags'>
        <Select mode='tags' options={tagOptions} />
      </Form.Item>
      <Form.Item label='Content'>
        <Editor />
      </Form.Item>
      <Form.Item>
        <Button block type='primary' htmlType='submit'>
          Upload
        </Button>
      </Form.Item>
    </Form>
  )
}

export { PostForm }
