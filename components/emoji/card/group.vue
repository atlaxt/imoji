<script setup lang='ts'>
import type { GroupKey } from '~/types'

const props = defineProps<{
  group: {
    key: GroupKey
    icon: string
  }
}>()
const emojiStore = useEmojiStore()

async function setGroup(group: GroupKey) {
  if (emojiStore.selectedGroupKey === group) {
    return
  }
  else {
    emojiStore.selectedGroupKey = group
  }
  await emojiStore.fetchEmojis()
}
</script>

<template>
  <div
    class="group lg:p-3 p-1 lg:whitespace-normal whitespace-nowrap flex lg:flex-col flex-row items-center justify-center gap-1
        rounded-lg border border-zinc-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900 shadow-sm
        hover:shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-800
        transition-all duration-200 ease-out
        text-sm lg:h-24 lg:w-32 text-center flex-1"
    :class="{
      'ring-2 ring-zinc-400 dark:ring-zinc-300': emojiStore.selectedGroupKey === props.group.key,
      'select-none opacity-50': emojiStore.isLoading,
      'cursor-pointer': !emojiStore.isLoading,
    }"
    @click="setGroup(props.group.key as GroupKey)"
  >
    <Icon
      :name="props.group.icon"
      class="text-2xl group-hover:scale-110 transition-transform"
    />
    <p class="text-xs font-medium text-zinc-700 dark:text-zinc-200">
      {{ props.group.key }}
    </p>
  </div>
</template>
