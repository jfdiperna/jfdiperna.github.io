import en from './locales/en.json';
import es from './locales/es.json';
import it from './locales/it.json';

export const languages = {
    en: 'English',
    es: 'Español',
    it: 'Italiano',
};

export const defaultLang = 'en';

export const translations = { en, es, it } as const;

export type Locale = keyof typeof translations;

export const ogLocales: Record<Locale, string> = {
    en: 'en_US',
    es: 'es_ES',
    it: 'it_IT',
};

export function getLangFromUrl(url: URL): Locale {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as Locale;
    return defaultLang;
}

export function useTranslations(lang: Locale) {
    return function t(key: string): string {
        const keys = key.split('.');
        let value: any = translations[lang];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return typeof value === 'string' ? value : key;
    };
}

export function getRouteFromUrl(url: URL): string {
    const pathname = url.pathname;
    const parts = pathname.split('/');
    const lang = parts[1];

    if (lang in translations) {
        return parts.slice(2).join('/') || '/';
    }

    return pathname;
}

export function translatePath(path: string, targetLang: Locale): string {
    if (targetLang === defaultLang) {
        return path === '/' ? '/' : path;
    }
    return `/${targetLang}${path === '/' ? '' : path}`;
}
