import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { addPlugin, addTemplate, defineNuxtModule, installModule } from '@nuxt/kit';

// 将路径转换为 POSIX 格式（使用正斜杠），兼容所有平台
function toPosixPath(path: string): string {
  return path.replace(/\\/g, '/');
}

export default defineNuxtModule({
  meta: {
    name: '@fcbyk/shadcn-docs-nuxt-lite',
    configKey: 'shadcnDocsLite',
  },
  defaults: {},
  async setup(options, nuxt) {
    const moduleDir = dirname(fileURLToPath(import.meta.url));
    const layerRoot = join(moduleDir, '..');

    // Check if @nuxtjs/i18n is installed in the host project
    let i18nInstalled = false;
    try {
      await import('@nuxtjs/i18n');
      i18nInstalled = true;
    } catch {
      i18nInstalled = false;
    }

    // Conditionally install i18n module only if it's available
    if (i18nInstalled) {
      await installModule('@nuxtjs/i18n', nuxt.options.i18n || {
        strategy: 'prefix_except_default',
      });
    } else {
      // Provide fallback i18n configuration
      nuxt.options.runtimeConfig.public.i18nEnabled = false;
      
      // Add fallback i18n plugin
      addPlugin({
        src: join(layerRoot, 'plugins/i18n-fallback.ts'),
      });
    }

    const template = addTemplate({
      filename: 'shadcn-docs-lite-entry.css',
      write: true,
      getContents: () => [
        `@import "${toPosixPath(join(layerRoot, 'assets/css/themes.css'))}";`,
        `@config "${toPosixPath(join(layerRoot, 'tailwind.config.js'))}";`,
        `@import "${toPosixPath(join(layerRoot, 'assets/css/tailwind.css'))}";`,
        `@source "${toPosixPath(join(layerRoot, 'components/**/*.{vue,js,ts}'))}";`,
        `@source "${toPosixPath(join(layerRoot, 'pages/**/*.vue'))}";`,
        `@source "${toPosixPath(join(layerRoot, 'app.vue'))}";`,
        `@source "${toPosixPath(join(layerRoot, 'content/**/*'))}";`,
        `@source "${toPosixPath(join(layerRoot, 'plugins/**/*.{js,ts}'))}";`,
      ].join('\n'),
    });
    nuxt.options.css.unshift(template.dst);
  },
});
