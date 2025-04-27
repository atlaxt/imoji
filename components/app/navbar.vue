<script setup lang="ts">

</script>

<template>
  <header
    class="
  flex items-center justify-center
  lg:text-2xl text-xl w-full
  lg:min-h-20 min-h-18 lg:px-0 px-3
  "
  >
    <div class="flex justify-between w-full items-center px-2">
      <Logo class="min-w-24" />

      <div class="lg:flex hidden items-center w-full">
        <!-- <AppNavigation class="mx-6" /> -->

        <div class="w-full lg:gap-4 gap-2 flex flex-row justify-end items-center">
          <!-- <BuyMeACoffee class="min-w-48" /> -->
          <ToggleTheme />
          <Help />
        </div>
      </div>

      <div class="lg:hidden flex gap-2 items-center">
        <ToggleTheme />
        <USlideover
          title="Slideover with close button"
          :close="{
            variant: 'outline',
            class: 'rounded-full',
          }"
        >
          <UButton class="text-xl" icon="lucide:menu" color="neutral" variant="link" />

          <template #title>
            <Logo />
          </template>

          <template #body>
            <div class="flex flex-col justify-between h-full">
              <UNavigationMenu
                orientation="vertical"
                :items="[
                  { label: 'Emojis', to: { name: 'emojis' } },
                  { label: 'Emoticons', to: { name: 'emoticons' }, disabled: true, badge: 'Coming Soon' },
                  { label: 'About', to: { name: 'about' } },
                ]"
              />
              <!-- <BuyMeACoffee /> -->
            </div>
          </template>

          <template #footer>
            <div class="w-full flex justify-between">
              <License />
              <Help />
            </div>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>
