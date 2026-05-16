<template>
  <ProseCode
    :code="code"
    :language="language"
    :filename="filename"
    :highlights="highlights"
    :meta="meta"
  >
    <pre :class="$props.class" :style="style"><slot /></pre>
  </ProseCode>
</template>

<script setup lang="ts">
import type { BuiltinLanguage } from 'shiki';

defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String as PropType<BuiltinLanguage>,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
  style: {
    type: [String, Object],
    default: null,
  },
});
</script>

<style>
pre, pre code, pre code span {
  /* 强制使用等宽字体，确保树形图对齐 */
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
  font-variant-ligatures: none !important;
  font-kerning: none !important;
  text-rendering: auto !important;
  white-space: pre !important;
}

pre code .line{
  display: block;
  min-height: 1rem;
}
</style>
