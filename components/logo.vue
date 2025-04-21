<template>
  <div class="cursor-pointer flex flex-row items-center gap-1.5" @click="navigateTo({ name: 'home' })">
    <img src="../assets/imoji.png" class="lg:h-8 h-6">
    <p class="lg:text-2xl font-semibold text-xl tracking-tighter bg-gradient-to-r dark:from-yellow-400/90 from-yellow-400 dark:to-pink-500/90 to-pink-500 text-transparent bg-clip-text">
      imoji
    </p>
  </div>
</template>
