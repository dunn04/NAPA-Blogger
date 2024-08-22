import { useSelectAll } from '@/hooks'
import { Button, Checkbox, Empty, Space, theme } from 'antd'
import { createContext, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { SelectCheckbox } from './SelectCheckbox'

type Props<T> = {
  className?: string
  dataSource?: T[]
  renderItem: (item: T, isChecked: boolean, index: number) => JSX.Element
  wrapper?: (children: JSX.Element | JSX.Element[]) => JSX.Element
  extra?: ReactNode
  actionSticky?: boolean
}

function Instance<T>({ dataSource = [], className, renderItem, wrapper, extra, actionSticky = false }: Props<T>) {
  const { isSelectAllIndeterminate, isSelectAll, toggleSelectAll, toggle, isSelected, selected } =
    useSelectAll(dataSource)
  const { token } = theme.useToken()

  const isChecked = dataSource.length > 0 && isSelectAll
  const showExtra = extra && selected.length > 0

  if (dataSource.length === 0) return <Empty />

  return (
    <SelectAllListContext.Provider
      value={
        {
          toggle,
          isSelected
        } as IContext<T>
      }
    >
      <div className={twMerge(className)}>
        <Space
          className={twMerge(actionSticky && 'sticky top-16 z-[999] rounded-sm w-full')}
          style={{
            backgroundColor: token.colorBgContainer
          }}
        >
          <Button>
            <Checkbox indeterminate={isSelectAllIndeterminate} onChange={toggleSelectAll} checked={isChecked} />
          </Button>
          {showExtra && extra}
        </Space>
        {wrapper
          ? wrapper(dataSource.map((item, index) => renderItem(item, isSelected(item), index)))
          : dataSource.map((item, index) => renderItem(item, isSelected(item), index))}
      </div>
    </SelectAllListContext.Provider>
  )
}

type IContext<T> = {
  toggle: (item: T) => void
  isSelected: (item: T) => boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectAllListContext = createContext<IContext<any> | undefined>(undefined)

const SelectAllList = Object.assign(Instance, { Checkbox: SelectCheckbox })

export { SelectAllList }
