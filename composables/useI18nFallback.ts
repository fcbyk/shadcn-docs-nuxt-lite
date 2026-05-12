/**
 * Fallback implementation for i18n when @nuxtjs/i18n is not installed
 * This provides a minimal interface that mimics the i18n API
 */

interface LocaleObject {
  code: string;
  name: string;
  language?: string;
}

interface FallbackI18n {
  locale: Ref<string>;
  locales: Ref<LocaleObject[]>;
  defaultLocale: string;
  availableLocales: string[];
  t: (key: string, params?: Record<string, any>) => string;
  te: (key: string) => boolean;
  rt: (message: string) => string;
}

// Simple translation messages (English only as fallback)
const fallbackMessages: Record<string, string> = {
  // Search
  'Search...': 'Search...',
  'Search documentation...': 'Search documentation...',
  'No results found.': 'No results found.',

  // 404
  'This page could not be found.': 'This page could not be found.',

  // Empty page
  'Empty page': 'Empty page',
  'Start writing content': 'Start writing in {fileLink} to see this page taking shape.',

  // TOC
  'On this page': 'On this page',

  // Search command
  'Light': 'Light',
  'Dark': 'Dark',
  'System': 'System',

  // Doc footer
  'Edit this page': 'Edit this page',
  'Back to Top': 'Back to Top',

  // Collapse Code
  'Expand': 'Expand',
  'Collapse': 'Collapse',

  // Language Switcher
  'Language': 'Language',
  'Choose your language': 'Choose your language',

  // Theme Switcher
  'Customize': 'Customize',
  'Pick a style and color for the docs.': 'Pick a style and color for the docs.',
  'Color': 'Color',
  'Radius': 'Radius',
  'Theme': 'Theme',

  // Copy Code
  'Copied to clipboard!': 'Copied to clipboard!',
  'Copy code': 'Copy code',

  // Read More
  'Read more at': 'Read more at',

  // Field
  'required': 'required',
};

/**
 * Creates a fallback i18n instance when @nuxtjs/i18n is not available
 */
export function createFallbackI18n(): FallbackI18n {
  const locale = ref('en');
  const locales = ref([{ code: 'en', name: 'English', language: 'en-US' }]);
  const defaultLocale = 'en';
  const availableLocales = ['en'];

  const t = (key: string, params?: Record<string, any>): string => {
    let message = fallbackMessages[key] || key;
    
    // Simple parameter replacement
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        message = message.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return message;
  };

  const te = (key: string): boolean => {
    return key in fallbackMessages;
  };

  const rt = (message: string): string => {
    return message;
  };

  return {
    locale,
    locales,
    defaultLocale,
    availableLocales,
    t,
    te,
    rt,
  } as FallbackI18n;
}

/**
 * Composable that provides i18n functionality with fallback support
 */
export function useI18nFallback() {
  const nuxtApp = useNuxtApp();
  
  // Check if real i18n is available
  const hasRealI18n = typeof nuxtApp.$i18n !== 'undefined';
  
  if (hasRealI18n) {
    // Use real i18n
    return {
      i18n: nuxtApp.$i18n,
      isEnabled: true,
    };
  } else {
    // Use fallback i18n
    const fallbackI18n = createFallbackI18n();
    return {
      i18n: fallbackI18n,
      isEnabled: false,
    };
  }
}
