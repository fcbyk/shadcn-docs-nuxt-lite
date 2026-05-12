<template>
  <NuxtLoadingIndicator :color="false" class="z-100 bg-primary/80" />
  <LayoutBanner v-if="config.banner.enable" />
  <LayoutHeader />
  <div
    v-if="page && !page.fullpage && baseRouteName !== 'index'"
    class="min-h-screen"
  >
    <div
      class="flex-1 items-start px-4 md:grid md:gap-6 md:px-8 lg:gap-10"
      :class="[
        config.main.padded && 'container',
        (page.aside ?? true) && 'md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]',
      ]"
    >
      <aside
        v-if="page.aside ?? true"
        class="fixed z-30 -ml-2 hidden w-full shrink-0 overflow-y-auto top-[102px] md:sticky md:block"
        :class="[
          (config.aside.useLevel && config.aside.levelStyle === 'aside') ? 'h-[calc(100vh-61px)] md:top-[61px]' : 'h-[calc(100vh-101px)] md:top-[101px]',
        ]"
      >
        <LayoutAside :is-mobile="false" />
      </aside>
      <NuxtPage />
    </div>
  </div>
  <div v-else class="min-h-screen">
    <NuxtPage />
  </div>

  <Toaster />
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue';

const { page } = useContent();
const config = useConfig();
const route = useRoute();
const { themeClass, radius, setClassTheme } = useThemes();
const nuxtApp = useNuxtApp();

// Get base route name with fallback support
const baseRouteName = computed(() => {
  // useRouteBaseName is only available when i18n is installed
  const useRouteBaseNameFn = nuxtApp.$routeBaseName;
  return useRouteBaseNameFn ? useRouteBaseNameFn(route) : (route.path === '/' ? 'index' : 'docs');
});

// Get locale with fallback support
const currentLocale = computed(() => {
  return typeof nuxtApp.$i18n !== 'undefined' 
    ? (nuxtApp.$i18n as any).locale.value 
    : 'en';
});

useSeoMeta({
  description: config.value.site.description,
  twitterCard: 'summary_large_image',
});

useHead({
  htmlAttrs: {
    lang: currentLocale,
  },
  bodyAttrs: {
    class: themeClass.value,
    style: `--radius: ${radius.value}rem;`,
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
});

onMounted(() => {
  setClassTheme();
});
</script>
