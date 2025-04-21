<script setup lang="ts">
const mounted = ref<boolean>(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <UPopover
    v-if="mounted"
    :content="{ side: 'left', align: 'start' }"
  >
    <UButton
      icon="lucide:circle-help"
      variant="link"
      class="text-xl"
    />

    <template #content>
      <div class="w-56 p-3 flex flex-col text-sm gap-3 text-zinc-600 dark:text-zinc-300">
        <div class="flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-200">
          Help
        </div>

        <div class="flex items-center gap-2 text-xs">
          <UIcon name="hugeicons:mouse-left-click-06" class="text-lg" />
          <span>Click emoji to copy</span>
        </div>

        <USeparator />

        <NuxtLink class="ml-0 hover:ml-2 duration-300" :to="{ name: 'about' }">
          About
        </NuxtLink>

        <USeparator />

        <div class="mt-auto text-xs text-zinc-400 flex flex-col gap-1">
          <p>
            MIT Licensed •
            <a href="https://github.com/atlaxt/imoji" target="_blank" class="underline hover:text-blue-500 transition">
              GitHub ↗
            </a>
          </p>
        </div>
      </div>
    </template>
  </UPopover>
  <USkeleton v-else class="w-8 h-8" />
</template>
