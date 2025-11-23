<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Emojis',
    active: route.path.startsWith('/'),
  },
  {
    label: 'Api',
    disabled: true,
    active: route.path.startsWith('/api'),
  },
  {
    label: 'npm',
    disabled: true,
    active: route.path.startsWith('/docs'),
  },
  {
    label: 'Chrome Extension',
    disabled: true,
    target: '_blank',
  },
])
</script>

<template>
  <UHeader class="mb-12">
    <template #title>
      <Logo class="h-full" />
    </template>

    <UNavigationMenu
      :highlight="true" :items="items"
    />

    <template #body>
      <UNavigationMenu orientation="vertical" :items="items" />
    </template>

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          target="_blank"
          to="https://github.com/atlaxt/imoji"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
