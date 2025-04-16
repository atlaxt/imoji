<script setup lang="ts">
const emojiStore = useEmojiStore()

const search = ref<string>('')

async function handleSearch() {
  if (search.value.length > 0)
    emojiStore.selectedGroup = ''

  emojiStore.search = search.value
  await emojiStore.fetchEmojis()
}
defineShortcuts({
  enter: {
    handler: async () => await handleSearch(),
    usingInput: true,
  },
})
function focusInput() {
  const _input = document.querySelector('input[name="_search"]') as HTMLInputElement
  _input.focus()
  _input.select()
}

defineShortcuts({
  ctrl_f: {
    handler: () => focusInput(),
    usingInput: true,
  },
})

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
  localStorage.setItem('selected-skin', tone)
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

async function setGroup(group: '' | 'Smileys & Emotion' | 'People & Body' | 'Animals & Nature' | 'Food & Drink' | 'Travel & Places' | 'Activities' | 'Objects' | 'Symbols' | 'Flags') {
  if (emojiStore.selectedGroup === group) {
    emojiStore.selectedGroup = ''
    emojiStore.search = ''
  }
  else {
    emojiStore.selectedGroup = group
  }
  await emojiStore.fetchEmojis()
}

onMounted(() => {
  emojiStore.setSkinColorFromStorage()
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-3 justify-end transition-transform duration-300 px-2">
    <div class="flex lg:flex-row flex-col-reverse gap-4 lg:justify-between justify-center items-end w-full">
      <UButtonGroup
        class="lg:w-64 w-full"
        :class="{
          'opacity-50': emojiStore.isLoading,
          'select-none': !emojiStore.isLoading,
        }"
      >
        <UInput
          v-model="search"
          icon="i-lucide-search"
          size="md"
          name="_search"
          placeholder="Search..."
          class="w-full"
        >
          <template #trailing>
            <UKbd v-if="!(search.length > 0)">
              {{ "CTRL + F" }}
            </UKbd>
            <UButton
              v-else
              color="error"
              variant="link"
              icon="i-lucide-circle-x"
              aria-label="Clear input"
              @click="async () => {
                search = ''
                emojiStore.search = ''
                await emojiStore.fetchEmojis()
              }"
            />
          </template>
        </UInput>
        <UTooltip
          :content="{
            align: 'center',
            side: 'top',
            sideOffset: 8,
          }"
        >
          <template #content>
            <UKbd> <UIcon name="lucide:corner-down-left" /> </UKbd>
          </template>
          <UButton
            color="neutral"
            :icon="`${!emojiStore.isLoading ? 'i-lucide-search' : 'i-lucide-loader'}`"
            @click="async () => {
              await handleSearch()
            }"
          />
        </UTooltip>
      </UButtonGroup>
      <div class="flex flex-row items-center gap-2">
        <button
          v-for="tone in skinTones"
          :key="tone.key"
          class="relative w-6 h-6 rounded-full border border-zinc-300 hover:scale-105 transition"
          :class="{
            'opacity-50': emojiStore.isLoading,
            'select-none': !emojiStore.isLoading,
          }"
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
    <div class="w-full h-full flex lg:gap-4 gap-x-2 gap-y-1 flex-row items-center overflow-x-auto lg:py-0 lg:px-2 lg:pb-0 py-1 px-2 pb-2">
      <div
        v-for="group in groups"
        :key="group.key"
        class="group lg:p-3 p-1 lg:whitespace-normal whitespace-nowrap flex lg:flex-col flex-row items-center justify-center gap-1
        rounded-lg border border-zinc-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900 shadow-sm
        hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-800
        transition-all duration-200 ease-out
        text-sm lg:h-24 lg:w-32 text-center flex-1"
        :class="{
          'ring-2 ring-zinc-400 dark:ring-zinc-300': emojiStore.selectedGroup === group.key,
          'select-none opacity-50': emojiStore.isLoading,
          'cursor-pointer': !emojiStore.isLoading,
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
