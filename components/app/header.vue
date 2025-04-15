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
  lg:text-2xl text-xl font-BOLD
  lg:min-h-20 min-h-12 lg:px-0 px-3
  "
  >
    <div class="flex justify-between w-full items-center px-2">
      <div class="flex flex-row items-center  gap-1.5">
        <img src="../../assets/emojix.png" class="lg:h-8 h-6">
        <p class="lg:text-3xl text-xl font-extrabold tracking-tighter bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text">
          emojix
        </p>
      </div>

      <div class="lg:gap-4 flex flex-row items-center">
        <a href="https://github.com/atlaxt/emojix" target="_blank">
          <UButton
            icon="mdi:github"
            class="lg:text-2xl text-lg"
            variant="link"
          />
        </a>
        <UButton
          :icon="`lucide:${isDark ? 'moon' : 'sun'}`"
          class="lg:text-2xl text-lg"
          variant="link"
          @click="toggleDark"
        />
      </div>
    </div>
  </header>
</template>
