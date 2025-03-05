const SUPPORTED_LANGUAGES = ['en', 'es', 'br']; // Allowed languages

export const getBrowserLanguage = (defaultLang: string = 'en'): string => {
  if (typeof navigator === 'undefined') return defaultLang; // Handle SSR (Server-Side Rendering)

  const lang = navigator.language.toLowerCase(); // Normalize case
  if (lang.startsWith('en')) return 'en';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('pt')) return 'br'; // Map 'pt' or 'pt-BR' to 'br'

  return SUPPORTED_LANGUAGES.includes(defaultLang) ? defaultLang : 'en'; // Fallback
};