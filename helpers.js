const transformToTitleCase = text => {
  const splittedWords = text.split(' ')
  const titleCasedWords = splittedWords.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  const result = titleCasedWords.join(' ')
  return result
}
