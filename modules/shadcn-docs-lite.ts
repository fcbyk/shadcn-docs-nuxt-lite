import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { addTemplate, defineNuxtModule } from '@nuxt/kit';

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
