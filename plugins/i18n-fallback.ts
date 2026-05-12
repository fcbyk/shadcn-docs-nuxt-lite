// Fallback i18n plugin for when @nuxtjs/i18n is not installed
// This provides a minimal $t function for translations

const messages: Record<string, string> = {
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

export default defineNuxtPlugin(() => {
  const t = (key: string, params?: Record<string, any>): string => {
    let message = messages[key] || key;
    
    // Simple parameter replacement
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        message = message.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return message;
  };

  return {
    provide: {
      t,
    },
  };
});
