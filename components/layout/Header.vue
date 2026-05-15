<template>
  <header
    class="bg-background/80 sticky top-0 z-40 backdrop-blur-lg"
    :class="{ 'border-b': config.header.border }"
  >
    <div
      class="flex h-14 items-center justify-between gap-2 px-4 md:px-8"
      :class="{
        'container': config.main.padded,
      }"
    >
      <LayoutHeaderLogo class="flex-1 flex" />
      <LayoutHeaderNav class="hidden flex-1 lg:flex" />
      <div class="flex flex-1 justify-end gap-2">
        <div class="hidden md:flex">
          <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'input'" />
        </div>
        <div class="flex">
          <LayoutSearchButton v-if="!config.search.inAside && config.search.style === 'button'" />
          <ThemePopover v-if="config.theme.customizable" />
          <DarkModeToggle v-if="config.header.darkModeToggle" />
          <NuxtLink
            v-for="(link, i) in config.header.links"
            :key="i"
            :to="link?.to"
            :target="link?.target"
          >
            <UiButton variant="ghost" size="icon" class="flex gap-2">
              <SmartIcon v-if="link?.icon" :name="link.icon" :size="18" />
            </UiButton>
          </NuxtLink>
        </div>
        <LayoutMobileNav />
      </div>
    </div>
    <div
      v-if="baseRouteName !== 'index' && config.aside.levelStyle === 'header'"
      class="md:mt-2 md:px-8"
      :class="{
        'md:container md:max-w-screen-2xl': config.main.padded,
      }"
    >
      <LayoutHeaderTopLevelNav />
    </div>
    <div v-if="showToc" class="lg:hidden">
      <LayoutToc is-small />
    </div>
  </header>
</template>

<script setup lang="ts">
const config = useConfig();
const { page } = useContent();

const showToc = computed(() => {
  return config.value.toc.enable
    && config.value.toc.enableInMobile
    && (page.value?._path === '/' ? config.value.toc.enableInHomepage : true);
});

const route = useRoute();
const baseRouteName = computed(() => route.path === '/' ? 'index' : 'docs');
</script>
