<script setup lang="ts">
import type { Emoji } from '~/types'

const props = defineProps<{
  emoji: Emoji
  hoverAnimation?: boolean
}>()
const toast = useToast()
const emojiStore = useEmojiStore()

function showToast(emoji: Emoji) {
  toast.add({
    title: 'Copied to Clipboard',
    description: `${emoji.emoji} has been successfully copied.`,
    icon: 'noto-v1:cat-with-wry-smile',
    class: 'text-4xl',
  })
}

function copyToClipboard() {
  navigator.clipboard.writeText(props.emoji.emoji)
  emojiStore.addLastEmoji(props.emoji)
  showToast(props.emoji)
}
</script>

<template>
  <UTooltip
    :content="{
      align: 'center',
      side: 'top',
      sideOffset: 8,
    }" :delay-duration="400" text="copy to clipboard"
  >
    <div
      class="cursor-pointer w-12 h-12 overflow-hidden flex items-center justify-center"
      :class="{
        'hover:scale-125 animation-all duration-100': props.hoverAnimation,
        '': !props.hoverAnimation,
      }"
      :title="props.emoji.name"
      @click="copyToClipboard"
    >
      {{ props.emoji.emoji }}
    </div>
  </UTooltip>
</template>
