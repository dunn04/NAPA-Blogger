import { useCallback, useState } from 'react'

const useCopyToClipboard = (timeout?: number) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyToClipboard = useCallback(
    (text: string) => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true)
          setTimeout(() => setIsCopied(false), timeout || 1500)
        })
        .catch((err) => {
          console.error('Failed to copy: ', err)
          setIsCopied(false)
        })
    },
    [timeout]
  )
  return [isCopied, copyToClipboard]
}

export { useCopyToClipboard }
