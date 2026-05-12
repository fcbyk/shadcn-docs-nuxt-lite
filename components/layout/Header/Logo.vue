<template>
  <div>
    <CompatNuxtLinkLocale :to="localePath('/')" class="flex">
      <template v-if="logo?.light && logo?.dark">
        <NuxtImg :src="logo.light" class="h-7 mr-3 dark:hidden" />
        <NuxtImg :src="logo.dark" class="hidden mr-3 h-7 dark:block" />
      </template>
      <span v-if="title" class="self-center font-bold text-[18px]">
        {{ $t(title) }}
      </span>
    </CompatNuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
const { logo, title } = useConfig().value.header;
const { localePath } = useI18nDocs();
</script>
