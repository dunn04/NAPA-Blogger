import { useSelectAll } from '@/hooks'
import { Checkbox, Dropdown, Space } from 'antd'
import { createContext, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { SelectCheckbox } from './SelectCheckbox'

type Props<T> = {
  className?: string
  dataSource?: T[]
  renderItem: (item: T, index: number) => JSX.Element
  wrapper?: (children: JSX.Element | JSX.Element[]) => JSX.Element
  extra?: ReactNode
}

function Instance<T>({ dataSource = [], className, renderItem, wrapper, extra }: Props<T>) {
  const { isSelectAllIndeterminate, isSelectAll, toggleSelectAll, toggle, isSelected, selected } =
    useSelectAll(dataSource)

  const isChecked = dataSource.length > 0 && isSelectAll
  const showExtra = extra && selected.length > 0
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
        <Space>
          <Dropdown.Button
            trigger={['click']}
            menu={{
              items: []
            }}
          >
            <Checkbox indeterminate={isSelectAllIndeterminate} onChange={toggleSelectAll} checked={isChecked} />
          </Dropdown.Button>
          {showExtra && extra}
        </Space>
        {wrapper ? wrapper(dataSource.map(renderItem)) : dataSource.map(renderItem)}
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
