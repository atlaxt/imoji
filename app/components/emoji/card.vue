<script setup lang="ts">
import Imoji from '../../assets/imoji.png'

const props = defineProps<{
  emoji: Emoji
  hoverAnimation?: boolean
}>()
const toast = useToast()

function showToast(emoji: Emoji) {
  toast.add({
    title: 'Copied to Clipboard',
    description: `${emoji.emoji} has been successfully copied.`,
    avatar: {
      src: Imoji,
      alt: 'imoji',
    },
    class: 'text-4xl',
  })
}

function copyToClipboard() {
  navigator.clipboard.writeText(props.emoji.emoji)
  showToast(props.emoji)
}
</script>

<template>
  <UTooltip
    :content="{
      align: 'center',
      side: 'top',
      sideOffset: 8,
    }" :delay-duration="400"
  >
    <template #content>
      <div class="flex flex-row gap-2 items-center p-1">
        <UIcon name="hugeicons:mouse-left-click-06" class="text-xl" />
        <p class="font-semibold">
          {{ "Copy to Clipboard" }}
        </p>
      </div>
    </template>
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
