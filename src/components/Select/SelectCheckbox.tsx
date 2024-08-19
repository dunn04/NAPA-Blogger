import { Checkbox } from 'antd'
import { useSelectAllList } from './useSelectAllList'

type Props<T> = {
  className?: string
  item: T
}

function SelectCheckbox<T>({ className, item }: Props<T>) {
  const { toggle, isSelected } = useSelectAllList()

  return <Checkbox className={className} checked={isSelected(item)} onChange={() => toggle(item)} />
}

export { SelectCheckbox }
