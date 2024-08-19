import { useSelectAll } from '@/hooks'
import { Checkbox, Dropdown, Space } from 'antd'
import { createContext } from 'react'
import { twMerge } from 'tailwind-merge'
import { SelectCheckbox } from './SelectCheckbox'

type Props<T> = {
  className?: string
  dataSource?: T[]
  renderItem: (item: T, index: number) => JSX.Element
}

function Instance<T>({ dataSource = [], className, renderItem }: Props<T>) {
  const { isSelectAllIndeterminate, isSelectAll, toggleSelectAll, toggle, isSelected } = useSelectAll(dataSource)

  const isChecked = dataSource.length > 0 && isSelectAll

  return (
    <SelectAllListContext.Provider
      value={
        {
          toggle,
          isSelected
        } as IContext<T>
      }
    >
      <div className={twMerge('', className)}>
        <Space>
          <Dropdown.Button
            trigger={['click']}
            menu={{
              items: []
            }}
          >
            <Checkbox indeterminate={isSelectAllIndeterminate} onChange={toggleSelectAll} checked={isChecked} />
          </Dropdown.Button>
        </Space>
        {dataSource.map(renderItem)}
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
