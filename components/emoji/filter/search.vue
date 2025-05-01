<script setup lang="ts">
const search = ref<string>('')
const emojiStore = useEmojiStore()

function handleSearch() {
  if (search.value.length > 0)
    emojiStore.selectedGroupKey = ''

  emojiStore.search = search.value
  emojiStore.fetchEmojis()
}

let timeout: ReturnType<typeof setTimeout> | null = null;

function handleSearchLive() {
  if (timeout !== null) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(handleSearch, 500);
}
</script>

<template>
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
      @keyup="handleSearchLive"
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
        @click="handleSearch"
      />
    </UTooltip>
  </UButtonGroup>
</template>
