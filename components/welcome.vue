<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

const emojiStore = useEmojiStore()

const handleSearch = useDebounceFn(async (value: string) => {
  emojiStore.search = value
  await emojiStore.fetchEmojis()
}, 1000)

const skinTones = [
  { key: '', color: '#ffc337' },
  { key: 'light', color: '#FDD7C4' },
  { key: 'medium-light', color: '#ECBFAC' },
  { key: 'medium', color: '#C48D7D' },
  { key: 'medium-dark', color: '#946662' },
  { key: 'dark', color: '#563739' },
]

async function setSkinTone(tone: '' | 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark') {
  emojiStore.selectedSkinColor = tone
  await emojiStore.fetchEmojis()
}

const groups = [
  { key: 'Smileys & Emotion', icon: 'fa-solid:smile' },
  { key: 'People & Body', icon: 'fa6-solid:people-pulling' },
  { key: 'Animals & Nature', icon: 'fluent:animal-dog-16-filled' },
  { key: 'Food & Drink', icon: 'mdi:food' },
  { key: 'Travel & Places', icon: 'material-symbols:travel' },
  { key: 'Activities', icon: 'bxs:map' },
  { key: 'Objects', icon: 'ic:baseline-emoji-objects' },
  { key: 'Symbols', icon: 'fluent:symbols-16-filled' },
  { key: 'Flags', icon: 'tabler:flag-filled' },
]

async function setGroup(tone: '' | 'Smileys & Emotion' | 'People & Body' | 'Animals & Nature' | 'Food & Drink' | 'Travel & Places' | 'Activities' | 'Objects' | 'Symbols' | 'Flags') {
  emojiStore.selectedGroup = tone
  await emojiStore.fetchEmojis()
}
</script>

<template>
  <div class="w-full h-full flex flex-col gap-3 justify-end transition-transform duration-300 px-2">
    <div class="flex flex-row gap-4 lg:justify-between justify-center items-center w-full">
      <UInput
        icon="i-lucide-search"
        size="md"
        placeholder="Search..."
        class="lg:w-48 w-full"
        @update:model-value="handleSearch"
      />
      <div class="flex flex-row items-center gap-2">
        <button
          v-for="tone in skinTones"
          :key="tone.key"
          class="relative w-6 h-6 rounded-full border border-zinc-300 hover:scale-105 transition"
          :style="{ backgroundColor: tone.color, boxShadow: emojiStore.selectedSkinColor === tone.key ? '0 0 0 2px rgba(0,0,0,0.3)' : '' }"
          @click="setSkinTone((tone.key as '' | 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark'))"
        >
          <span
            v-if="emojiStore.selectedSkinColor === tone.key"
            class="absolute inset-0 flex items-center justify-center text-white text-[12px] font-bold"
          >
            ✓
          </span>
        </button>
      </div>
    </div>

    <div class="w-full h-full flex lg:gap-4 gap-2 flex-wrap items-center">
      <div
        v-for="group in groups"
        :key="group.key"
        class="group cursor-pointer lg:p-3 p-1 lg:whitespace-normal whitespace-nowrap flex lg:flex-col flex-row items-center justify-center gap-1
    rounded-lg border border-zinc-200 dark:border-zinc-700
    bg-white dark:bg-zinc-900 shadow-sm
    hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-800
    transition-all duration-200 ease-out
    text-sm lg:h-24 lg:w-32 text-center flex-1"
        :class="{
          'ring-2 ring-zinc-400 dark:ring-zinc-300': emojiStore.selectedGroup === group.key,
        }"
        @click="setGroup(group.key as '' | 'Smileys & Emotion' | 'People & Body' | 'Animals & Nature' | 'Food & Drink' | 'Travel & Places' | 'Activities' | 'Objects' | 'Symbols' | 'Flags')"
      >
        <Icon
          :name="group.icon"
          class="text-2xl group-hover:scale-110 transition-transform"
        />
        <p class="text-xs font-medium text-zinc-700 dark:text-zinc-200">
          {{ group.key }}
        </p>
      </div>
    </div>
  </div>
</template>
