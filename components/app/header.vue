<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
function toggleDark() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <header
    class="
  flex items-center justify-center
  lg:text-2xl text-xl
  lg:min-h-20 min-h-16 lg:px-0 px-3
  "
  >
    <div class="flex justify-between w-full items-center px-2">
      <div class="flex flex-row items-center  gap-1.5">
        <img src="../../assets/imoji.png" class="lg:h-8 h-6 animate-slow-spin">
        <p class="select-none lg:text-2xl font-semibold text-xl tracking-tighter bg-gradient-to-r dark:from-yellow-400/90 from-yellow-400 dark:to-pink-500/90 to-pink-500 text-transparent bg-clip-text">
          imoji
        </p>
      </div>

      <div class="lg:gap-4 gap-2 flex flex-row items-center">
        <a
          href="https://www.buymeacoffee.com/atlaxt"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 lg:px-4 px-2 lg:py-1 py-0 rounded-full lg:text-sm text-xs
           bg-gradient-to-r from-yellow-400/80 to-pink-500/80
           hover:brightness-120 transition-all duration-200"
        >
          <span class="text-xl">☕</span>
          Buy me a coffee
        </a>
        <a href="https://github.com/atlaxt/imoji" target="_blank">
          <UButton
            icon="mdi:github"
            class="text-2xl"
            variant="link"
          />
        </a>
        <UButton
          :icon="`lucide:${isDark ? 'moon' : 'sun'}`"
          class="text-2xl"
          variant="link"
          @click="toggleDark"
        />
      </div>
    </div>
  </header>
</template>

<style>
@layer utilities {
  @keyframes slow-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .animate-slow-spin {
    animation: slow-spin 8s linear infinite;
  }
}
</style>
