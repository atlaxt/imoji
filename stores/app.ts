export const useApp = defineStore('app', () => {
  const scrollY = ref<number>(0)
  return {
    scrollY,
  }
})
