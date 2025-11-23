<script setup lang="ts">
</script>

<template>
  <UFooter class="mt-24">
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <!-- <span>
        made by&nbsp;
        <ULink to="https://atlaxt.me" target="_blank" class="">
          atlaxt
        </ULink>
      </span> -->
      <ULink to="https://atlaxt.me" target="_blank">
        <UColorModeImage
          class="h-12"
          light="https://atlaxt.me/logo_light.png"
          dark="https://atlaxt.me/logo_dark.png"
        />
      </ULink>
    </template>
  </UFooter>
</template>
