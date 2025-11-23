export default defineEventHandler((_event) => {
  const emojis = loadEmojis()

  return {
    emojis,
  }
})
