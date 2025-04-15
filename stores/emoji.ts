import type { Emoji } from '~/types'

export const useEmojiStore = defineStore('emoji', {
  state: () => ({
    emojis: [] as Emoji[],
    lastEmojis: [] as Emoji[],
    isLoading: true,
    search: '',
    selectedGroup: 'Smileys & Emotion' as '' | 'Smileys & Emotion' | 'People & Body' | 'Animals & Nature' | 'Food & Drink' | 'Travel & Places' | 'Activities' | 'Objects' | 'Symbols' | 'Flags',
    selectedSkinColor: '' as '' | 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark',
  }),

  getters: {
    filteredEmojis(state): Emoji[] {
      const filtered = state.emojis.filter((e) => {
        const matchesSearch = e.name.toLowerCase().includes(state.search.toLowerCase())
        const matchesGroup = !state.selectedGroup || e.group === state.selectedGroup
        return matchesSearch && matchesGroup
      })

      if (!state.selectedSkinColor)
        return filtered.filter(e => !e.name.includes(':'))

      const withSkinTone: Emoji[] = []

      for (const emoji of filtered) {
        if (emoji.name.includes(':'))
          continue

        const baseName = emoji.name
        const match = state.emojis.find(
          e => e.name === `${baseName}: ${state.selectedSkinColor} skin tone`,
        )

        withSkinTone.push(match || emoji)
      }

      return withSkinTone
    },

    emojiGroups(state): string[] {
      const unique = new Set(state.emojis.map(e => e.group))
      return Array.from(unique)
    },
  },

  actions: {
    async fetchEmojis() {
      if (this.emojis.length)
        return
      this.isLoading = true
      try {
        const res = await fetch('/emojis.json')
        this.emojis = await res.json()
      }
      catch (err) {
        console.error('Emoji fetch error:', err)
      }
      finally {
        this.isLoading = false
      }
    },

    fetchLastEmojis() {
      const raw = localStorage.getItem('last-emojis')
      this.lastEmojis = raw ? JSON.parse(raw) : []
    },

    isSameEmoji(a: Emoji, b: Emoji): boolean {
      return a.emoji === b.emoji && a.name === b.name
    },

    addLastEmoji(emoji: Emoji) {
      const key = 'last-emojis'
      const stored = localStorage.getItem(key)
      let list: Emoji[] = stored ? JSON.parse(stored) : []
      list = list.filter(e => !this.isSameEmoji(e, emoji))
      list.unshift(emoji)
      if (list.length > 20)
        list = list.slice(0, 20)
      localStorage.setItem(key, JSON.stringify(list))
      this.fetchLastEmojis()
    },

  },
})
