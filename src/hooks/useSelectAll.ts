import { useCallback, useMemo, useState } from 'react'

const useSelectAll = <T>(source: T[], defaultValues?: T[]) => {
  const [selected, setSelected] = useState<T[]>(defaultValues ?? [])

  const selectAll = useCallback(() => {
    setSelected(source)
  }, [setSelected, source])

  const unSelectAll = useCallback(() => {
    setSelected([])
  }, [setSelected])

  const isSelected = useCallback((item: T) => selected.includes(item), [selected])

  const toggle = useCallback((item: T) => {
    setSelected((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item)
      }
      return [...prev, item]
    })
  }, [])

  const isSelectAll = useMemo(() => selected.length === source.length, [selected, source])

  const isSelectAllIndeterminate = useMemo(
    () => selected.length > 0 && selected.length < source.length,
    [selected, source]
  )

  const toggleSelectAll = useCallback(() => {
    if (isSelectAll) {
      unSelectAll()
    } else {
      selectAll()
    }
  }, [unSelectAll, selectAll, isSelectAll])

  return {
    selected,
    selectAll,
    unSelectAll,
    isSelected,
    toggle,
    isSelectAll,
    isSelectAllIndeterminate,
    toggleSelectAll
  }
}

export { useSelectAll }
