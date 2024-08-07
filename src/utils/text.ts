const limitTextToWords = (text: string, limit: number) => {
  const words = text.split(' ')
  return words.slice(0, limit).join(' ') + (words.length > limit ? '...' : '')
}

export { limitTextToWords }
