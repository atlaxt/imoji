<script setup lang="ts">
import type { Emoticon } from '~/types'
import Imoji from '~/assets/imoji.png'

const props = defineProps<{
  emoticon: Emoticon
  hoverAnimation?: boolean
}>()

const emoticonStore = useEmoticonStore()
const toast = useToast()

function copyToClipboard() {
  navigator.clipboard.writeText(props.emoticon.emoticon)
  emoticonStore.addLastEmoticon(props.emoticon)
  toast.add({
    title: 'Copied!',
    description: `${props.emoticon.emoticon} copied to clipboard.`,
    avatar: {
      src: Imoji,
      alt: 'imoji',
    },
    class: 'text-lg',
  })
}
</script>

<template>
  <UTooltip
    :content="{ side: 'top', align: 'center', sideOffset: 6 }"
    :delay-duration="300"
  >
    <template #content>
      <div class="flex items-center gap-2">
        <UIcon name="hugeicons:mouse-left-click-06" class="text-base" />
        <span class="text-sm font-medium">Click to copy</span>
      </div>
    </template>

    <div
      class="rounded-md flex-1 whitespace-nowrap border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md
             transition-all duration-200 ease-out text-lg text-center px-3 py-2 cursor-pointer select-none"
      :class="{ 'hover:scale-110': props.hoverAnimation }"
      :title="props.emoticon.emoticon"
      @click="copyToClipboard"
    >
      {{ props.emoticon.emoticon }}
    </div>
  </UTooltip>
</template>
