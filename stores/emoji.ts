import type { Emoji, Group, GroupKey, SkinTone, SkinToneKey } from '~/types'

export const useEmojiStore = defineStore('emoji', {
  state: () => ({
    emojis: [] as Emoji[],
    lastEmojis: [] as Emoji[],
    isLoading: true,
    search: '',
    selectedGroupKey: 'Smileys & Emotion' as GroupKey,
    groupOptions: [
      { key: 'Smileys & Emotion', icon: 'fa-solid:smile' },
      { key: 'People & Body', icon: 'fa6-solid:people-pulling' },
      { key: 'Animals & Nature', icon: 'fluent:animal-dog-16-filled' },
      { key: 'Food & Drink', icon: 'mdi:food' },
      { key: 'Travel & Places', icon: 'material-symbols:travel' },
      { key: 'Activities', icon: 'bxs:map' },
      { key: 'Objects', icon: 'ic:baseline-emoji-objects' },
      { key: 'Symbols', icon: 'fluent:symbols-16-filled' },
      { key: 'Flags', icon: 'tabler:flag-filled' },
    ] as Group[],
    selectedSkinColor: '' as SkinToneKey,
    skinToneOptions: [
      { key: '', color: '#ffc337' },
      { key: 'light', color: '#FDD7C4' },
      { key: 'medium-light', color: '#ECBFAC' },
      { key: 'medium', color: '#C48D7D' },
      { key: 'medium-dark', color: '#946662' },
      { key: 'dark', color: '#563739' },
    ] as SkinTone[],
  }),

  getters: {
    filteredEmojis(state): Emoji[] {
      const filtered = state.emojis.filter((e) => {
        const matchesSearch = e.name.toLowerCase().includes(state.search.toLowerCase())
        const matchesGroup = !state.selectedGroupKey || e.group === state.selectedGroupKey
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
      this.isLoading = true
      try {
        const res = await fetch('/emojis.json')
        const all = await res.json()

        const group = this.selectedGroupKey
        const tone = this.selectedSkinColor

        let filtered = all.filter((e: Emoji) => e.group === group)

        if (!tone) {
          filtered = filtered.filter((e: Emoji) => !e.name.includes(':'))
        }
        else {
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

        this.emojis = filtered
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

    setSkinColorFromStorage() {
      const tone = localStorage.getItem('selected-skin')
      if (tone) {
        this.selectedSkinColor = tone as typeof this.selectedSkinColor
      }
    },

  },
})
