<script setup lang="ts">
const mounted = ref<boolean>(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <UPopover
    v-if="mounted"
    mode="hover"
    :content="{ side: 'left', align: 'start' }"
  >
    <UButton
      icon="lucide:circle-help"
      variant="link"
      class="text-xl"
    />

    <template #content>
      <div class="h-64 w-48 p-2 flex flex-col text-sm gap-2 text-zinc-600 dark:text-zinc-300">
        <div class="w-full flex items-end gap-2 justify-start">
          <UIcon class="text-2xl" name="hugeicons:mouse-left-click-06" />
          <label> {{ "Right click to copy" }} </label>
        </div>
        <USeparator />
        <div class="w-full h-full">
          placeholder
        </div>
        <USeparator />
        <p class="text-xs text-zinc-500">
          Published under <a href="https://opensource.org/licenses/MIT" target="_blank" class="underline">MIT License</a>
        </p>
      </div>
    </template>
  </UPopover>
  <USkeleton v-else class="w-8 h-8" />
</template>
