import { Button, DatePicker, Form, Input, Select } from 'antd'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { Editor } from '../Editor'
import { PostCreateParams } from '@/types'
import dayjs from 'dayjs'

type Props = {
  className?: string
  initialValues?: PostCreateParams
}

const PostForm: FC<Props> = ({ className, initialValues }) => {
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
      value: '1'
    },
    {
      label: 'Vue',
      value: '2'
    },
    {
      label: 'Angular',
      value: '3'
    },
    {
      label: 'Svelte',
      value: '4'
    },
    {
      label: 'Next.js',
      value: '5'
    },
    {
      label: 'Nuxt.js',
      value: '6'
    },
    {
      label: 'Gatsby',
      value: '7'
    },
    {
      label: 'Gridsome',
      value: '8'
    },
    {
      label: 'React Native',
      value: '9'
    },
    {
      label: 'Flutter',
      value: '10'
    }
  ]

  return (
    <Form
      layout='vertical'
      className={twMerge('', className)}
      initialValues={{
        ...initialValues,
        publishedAt: initialValues?.publishedAt ? dayjs.unix(initialValues.publishedAt) : undefined
      }}
    >
      <Form.Item label='Title' name='title'>
        <Input placeholder='Enter your title of blog' />
      </Form.Item>
      <Form.Item label='Category' name='category'>
        <Select defaultValue={1} options={categoryOptions} />
      </Form.Item>
      <Form.Item label='Tags' name='tags'>
        <Select mode='tags' options={tagOptions} />
      </Form.Item>
      <Form.Item label='Published at' name='publishedAt'>
        <DatePicker className='w-full' />
      </Form.Item>
      <Form.Item label='Content' name='content'>
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
