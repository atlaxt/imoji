<script setup lang="ts">
import type { SkinTone, SkinToneKey } from '~/types'

const props = defineProps<{
  skinTone: SkinTone
}>()
const emojiStore = useEmojiStore()

async function setSkinTone(tone: SkinToneKey) {
  emojiStore.selectedSkinColor = tone
  localStorage.setItem('selected-skin', tone)
  await emojiStore.fetchEmojis()
}
</script>

<template>
  <button
    class="relative w-6 h-6 rounded-full border border-zinc-300 hover:scale-105 transition"
    :class="{
      'opacity-50': emojiStore.isLoading,
      'select-none': !emojiStore.isLoading,
    }"
    :style="{ backgroundColor: props.skinTone.color, boxShadow: emojiStore.selectedSkinColor === props.skinTone.key ? '0 0 0 2px rgba(0,0,0,0.3)' : '' }"
    @click="setSkinTone(props.skinTone.key as SkinToneKey)"
  >
    <span
      v-if="emojiStore.selectedSkinColor === props.skinTone.key"
      class="absolute inset-0 flex items-center justify-center text-white text-[12px] font-bold"
    >
      ✓
    </span>
  </button>
</template>
