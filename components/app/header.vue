<script setup lang="ts">

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
      <div class="cursor-pointer flex flex-row items-center  gap-1.5" @click="navigateTo({ name: 'home' })">
        <img src="../../assets/imoji.png" class="lg:h-8 h-6">
        <p class="lg:text-2xl font-semibold text-xl tracking-tighter bg-gradient-to-r dark:from-yellow-400/90 from-yellow-400 dark:to-pink-500/90 to-pink-500 text-transparent bg-clip-text">
          imoji
        </p>
      </div>

      <div class="lg:gap-4 gap-2 flex flex-row items-center">
        <BuyMeACoffee />
        <ToggleTheme />
        <Help />
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
