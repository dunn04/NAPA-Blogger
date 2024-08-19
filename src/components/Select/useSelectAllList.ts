import { useContext } from 'react'
import { SelectAllListContext } from './SelectAllList'

const useSelectAllList = () => {
  const context = useContext(SelectAllListContext)
  if (!context) {
    throw new Error('useSelectAllList must be used within a SelectAllListProvider')
  }

  return context
}

export { useSelectAllList }
