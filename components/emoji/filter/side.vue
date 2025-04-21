<script setup lang="ts">
const emojiStore = useEmojiStore()

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

onMounted(() => {
  emojiStore.setSkinColorFromStorage()
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-3 justify-end transition-transform duration-300">
    <div class="flex lg:flex-row flex-col-reverse gap-4 lg:justify-between justify-center items-end w-full px-2">
      <EmojiFilterSearch />
      <div class="flex flex-row items-center gap-2">
        <EmojiCardSkinTone
          v-for="skinTone in emojiStore.skinToneOptions"
          :key="skinTone.key"
          :skin-tone="skinTone"
        />
      </div>
    </div>
    <div class="w-full h-full flex lg:gap-4 gap-x-2 gap-y-1 flex-row items-center overflow-x-auto lg:py-0 lg:px-2 lg:pb-0 py-1 px-2 pb-2">
      <EmojiCardGroup
        v-for="group in emojiStore.groupOptions"
        :key="group.key"
        :group
      />
    </div>
  </div>
</template>
