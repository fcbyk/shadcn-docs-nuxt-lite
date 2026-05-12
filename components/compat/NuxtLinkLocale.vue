<!--
  NuxtLinkLocale compatibility wrapper
  Falls back to regular NuxtLink when @nuxtjs/i18n is not installed
-->
<script setup lang="ts">
const nuxtApp = useNuxtApp();

// Check if NuxtLinkLocale is available (i18n installed)
const hasNuxtLinkLocale = typeof nuxtApp.$localePath === 'function';

defineProps<{
  to?: string | object;
  target?: string;
}>();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <NuxtLink
    v-if="!hasNuxtLinkLocale"
    :to="to"
    :target="target"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <NuxtLinkLocale
    v-else
    :to="to"
    :target="target"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLinkLocale>
</template>
