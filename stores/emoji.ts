import type { Emoji, EmojiGroup, EmojiGroupKey, EmojiSkinToneKey, SkinTone } from '~/types'
import { computed, ref } from 'vue'

export const useEmojiStore = defineStore('emoji', () => {
  // State
  const emojis = ref<Emoji[]>([])
  const lastEmojis = ref<Emoji[]>([])
  const isLoading = ref(true)
  const search = ref('')
  const selectedGroupKey = ref<EmojiGroupKey>('Smileys & Emotion')
  const selectedSkinColor = ref<EmojiSkinToneKey>('')

  const groupOptions = ref<EmojiGroup[]>([
    { key: 'Smileys & Emotion', icon: 'fa-solid:smile' },
    { key: 'People & Body', icon: 'fa6-solid:people-pulling' },
    { key: 'Animals & Nature', icon: 'fluent:animal-dog-16-filled' },
    { key: 'Food & Drink', icon: 'mdi:food' },
    { key: 'Travel & Places', icon: 'material-symbols:travel' },
    { key: 'Activities', icon: 'bxs:map' },
    { key: 'Objects', icon: 'ic:baseline-emoji-objects' },
    { key: 'Symbols', icon: 'fluent:symbols-16-filled' },
    { key: 'Flags', icon: 'tabler:flag-filled' },
  ])

  const skinToneOptions = ref<SkinTone[]>([
    { key: '', color: '#ffc337' },
    { key: 'light', color: '#FDD7C4' },
    { key: 'medium-light', color: '#ECBFAC' },
    { key: 'medium', color: '#C48D7D' },
    { key: 'medium-dark', color: '#946662' },
    { key: 'dark', color: '#563739' },
  ])

  // Getters
  const filteredEmojis = computed(() => {
    const filtered = emojis.value.filter((e) => {
      const matchesSearch = e.name.toLowerCase().includes(search.value.toLowerCase())
      const matchesGroup = !selectedGroupKey.value || e.group === selectedGroupKey.value
      return matchesSearch && matchesGroup
    })

    if (!selectedSkinColor.value)
      return filtered.filter(e => !e.name.includes(':'))

    const withSkinTone: Emoji[] = []

    for (const emoji of filtered) {
      if (emoji.name.includes(':')) {
        withSkinTone.push(emoji)
        continue
      }

      const baseName = emoji.name
      const match = emojis.value.find(
        e => e.name === `${baseName}: ${selectedSkinColor.value} skin tone`,
      )

      withSkinTone.push(match || emoji)
    }

    return withSkinTone
  })

  const emojiGroups = computed(() => {
    const unique = new Set(emojis.value.map(e => e.group))
    return Array.from(unique)
  })

  // Actions
  async function fetchEmojis() {
    if (selectedGroupKey.value === '' && search.value === '')
      selectedGroupKey.value = 'Smileys & Emotion'

    isLoading.value = true
    try {
      const res = await fetch('/emojis.json')
      const all = await res.json()

      const group = selectedGroupKey.value
      const tone = selectedSkinColor.value

      let filtered = all
      if (group)
        filtered = filtered.filter((e: Emoji) => e.group === group)

      if (tone) {
        const withTone: Emoji[] = []
        for (const emoji of filtered) {
          if (emoji.name.includes(':'))
            continue
          const baseName = emoji.name
          const match = all.find(
            (e: Emoji) => e.name === `${baseName}: ${tone} skin tone`,
          )
          withTone.push(match || emoji)
        }
        filtered = withTone
      }

      emojis.value = filtered
    }
    catch (err) {
      console.error('Emoji fetch error:', err)
    }
    finally {
      isLoading.value = false
    }
  }

  function fetchLastEmojis() {
    const raw = localStorage.getItem('last-emojis')
    lastEmojis.value = raw ? JSON.parse(raw) : []
  }

  function isSameEmoji(a: Emoji, b: Emoji): boolean {
    return a.emoji === b.emoji && a.name === b.name
  }

  function addLastEmoji(emoji: Emoji) {
    const key = 'last-emojis'
    const stored = localStorage.getItem(key)
    let list: Emoji[] = stored ? JSON.parse(stored) : []
    list = list.filter(e => !isSameEmoji(e, emoji))
    list.unshift(emoji)
    if (list.length > 20)
      list = list.slice(0, 20)
    localStorage.setItem(key, JSON.stringify(list))
    fetchLastEmojis()
  }

  function setSkinColorFromStorage() {
    const tone = localStorage.getItem('selected-skin')
    if (tone) {
      selectedSkinColor.value = tone as EmojiSkinToneKey
    }
  }

  // Expose
  return {
    // state
    emojis,
    lastEmojis,
    isLoading,
    search,
    selectedGroupKey,
    selectedSkinColor,
    groupOptions,
    skinToneOptions,

    // getters
    filteredEmojis,
    emojiGroups,

    // actions
    fetchEmojis,
    fetchLastEmojis,
    addLastEmoji,
    isSameEmoji,
    setSkinColorFromStorage,
  }
})
